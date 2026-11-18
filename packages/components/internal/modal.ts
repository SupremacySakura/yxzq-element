export const booleanAttribute = {
  fromAttribute: (value: string | null): boolean =>
    value !== null && value !== "false",
  toAttribute: (value: boolean): string | null => (value ? "" : null),
};

export const trueBooleanAttribute = {
  fromAttribute: (value: string | null): boolean => value !== "false",
  toAttribute: (value: boolean): string | null => (value ? "" : null),
};

/**
 * A focus scope that spans the host's shadow controls and its slotted content.
 * The shared focus trap can only walk one DOM tree, so this lightweight
 * container joins both trees for querying while delegating focus restoration
 * to the trap itself.
 */
export class ComposedFocusScope {
  constructor(
    private readonly host: HTMLElement,
    private readonly panel: HTMLElement,
  ) {}

  querySelectorAll(selector: string): HTMLElement[] {
    return [
      ...Array.from(this.panel.querySelectorAll<HTMLElement>(selector)),
      ...Array.from(this.host.querySelectorAll<HTMLElement>(selector)),
    ].filter((element, index, elements) => elements.indexOf(element) === index);
  }

  contains(node: Node | null): boolean {
    if (!node) {
      return false;
    }

    let current: Node | null = node;
    while (current) {
      if (this.panel.contains(current) || this.host.contains(current)) {
        return true;
      }
      const root = current.getRootNode();
      current = root instanceof ShadowRoot ? root.host : null;
    }
    return false;
  }
}

export interface ModalCloseOptions<TReason extends string> {
  host: HTMLElement;
  eventPrefix: string;
  reason: TReason;
  close: () => void;
}

/**
 * Runs the shared modal close sequence: cancelable before-close, an optional
 * confirm/cancel event, the state commit, then the final close event.
 */
export function dispatchModalClose<TReason extends string>({
  host,
  eventPrefix,
  reason,
  close,
}: ModalCloseOptions<TReason>): boolean {
  const beforeClose = new CustomEvent<{ reason: TReason }>(
    `${eventPrefix}-before-close`,
    {
      detail: { reason },
      bubbles: true,
      composed: true,
      cancelable: true,
    },
  );

  if (!host.dispatchEvent(beforeClose)) {
    return false;
  }

  if (reason === "confirm") {
    host.dispatchEvent(
      new CustomEvent<{ reason: "confirm" }>(`${eventPrefix}-confirm`, {
        detail: { reason: "confirm" },
        bubbles: true,
        composed: true,
      }),
    );
  } else if (reason === "cancel") {
    host.dispatchEvent(
      new CustomEvent<{ reason: "cancel" }>(`${eventPrefix}-cancel`, {
        detail: { reason: "cancel" },
        bubbles: true,
        composed: true,
      }),
    );
  }

  close();

  host.dispatchEvent(
    new CustomEvent<{ reason: TReason }>(`${eventPrefix}-close`, {
      detail: { reason },
      bubbles: true,
      composed: true,
    }),
  );

  return true;
}
