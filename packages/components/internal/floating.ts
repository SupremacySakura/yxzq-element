import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  type Placement,
  type Strategy,
} from "@floating-ui/dom";

export interface CreateFloatingOptions {
  placement?: Placement;
  offset?: number;
  padding?: number;
  strategy?: Strategy;
}

export interface FloatingController {
  update: () => Promise<void>;
  destroy: () => void;
}

const createNoopController = (): FloatingController => ({
  update: async () => {},
  destroy: () => {},
});

/**
 * Positions a floating element against an anchor and keeps the position in
 * sync while either element moves. It is intentionally inert without a DOM
 * so components can be imported during server rendering.
 */
export function createFloating(
  anchor: Element | null | undefined,
  floating: HTMLElement | null | undefined,
  options: CreateFloatingOptions = {},
): FloatingController {
  if (typeof document === "undefined" || !anchor || !floating) {
    return createNoopController();
  }

  const placement = options.placement ?? "top";
  const strategy = options.strategy ?? "fixed";
  const padding = options.padding ?? 8;
  const distance = options.offset ?? 8;
  let destroyed = false;
  let requestId = 0;
  let cleanup: (() => void) | undefined;

  const update = async (): Promise<void> => {
    if (destroyed || !anchor.isConnected || !floating.isConnected) {
      return;
    }

    const currentRequest = ++requestId;

    try {
      const position = await computePosition(anchor, floating, {
        placement,
        strategy,
        middleware: [
          offset(distance),
          flip({ padding }),
          shift({ padding }),
        ],
      });

      if (destroyed || currentRequest !== requestId) {
        return;
      }

      floating.style.position = strategy;
      floating.style.left = `${Math.round(position.x)}px`;
      floating.style.top = `${Math.round(position.y)}px`;
      floating.dataset.placement = position.placement;
    } catch {
      // Positioning is progressive enhancement; the floating element remains
      // usable at its CSS fallback position if measurement is unavailable.
    }
  };

  try {
    cleanup = autoUpdate(anchor, floating, () => {
      void update();
    });
  } catch {
    void update();
  }

  return {
    update,
    destroy: () => {
      if (destroyed) {
        return;
      }

      destroyed = true;
      cleanup?.();
      cleanup = undefined;
    },
  };
}
