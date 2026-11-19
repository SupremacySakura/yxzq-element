export interface ControlledValueSnapshot<T> {
  version: number;
  value: T;
}

export interface ControlledValueGuard<T> {
  markExternal(value: T): void;
  capture(): ControlledValueSnapshot<T> | null;
  confirm(snapshot: ControlledValueSnapshot<T> | null): void;
  dispose(): void;
}

export interface ControlledValueGuardOptions<T> {
  host: HTMLElement;
  getValue: () => T;
  setValue: (value: T) => void;
  clone?: (value: T) => T;
  equals?: (left: T, right: T) => boolean;
}

let attributeWriteDepth = 0;

/**
 * Marks work that originates from an HTML attribute write. Components call
 * this around `super.attributeChangedCallback` so the controlled-value guard
 * can keep attribute-initialized elements uncontrolled.
 */
export function runAttributeWrite<T>(callback: () => T): T {
  attributeWriteDepth += 1;
  try {
    return callback();
  } finally {
    attributeWriteDepth -= 1;
  }
}

export function isAttributeWrite(): boolean {
  return attributeWriteDepth > 0;
}

const cloneDefault = <T>(value: T): T =>
  Array.isArray(value) ? ([...value] as T) : value;

const equalsDefault = <T>(left: T, right: T): boolean =>
  Array.isArray(left) && Array.isArray(right)
    ? left.length === right.length &&
      left.every((item, index) => item === right[index])
    : Object.is(left, right);

/**
 * Bridges controlled Web Component state to framework renderers.
 *
 * A consumer's framework may skip writing an unchanged prop during a rerender.
 * If a user interaction mutates the element and the consumer rejects that
 * change by leaving its state untouched, no setter call arrives. The guard
 * keeps the last externally committed value and restores it after a frame
 * unless the consumer wrote a new value in the meantime.
 */
export function createControlledValueGuard<T>(
  options: ControlledValueGuardOptions<T>,
): ControlledValueGuard<T> {
  const clone = options.clone ?? cloneDefault;
  const equals = options.equals ?? equalsDefault;
  let controlled = false;
  let version = 0;
  let committedValue = clone(options.getValue());
  let frame: number | undefined;

  const cancel = (): void => {
    if (frame === undefined) {
      return;
    }
    options.host.ownerDocument.defaultView?.cancelAnimationFrame(frame);
    frame = undefined;
  };

  return {
    markExternal(value: T): void {
      // Attributes describe the initial/default value in plain HTML. Treating
      // them as controlled commits would make typing and toggling snap back.
      if (isAttributeWrite() && !controlled) {
        return;
      }
      controlled = true;
      version += 1;
      committedValue = clone(value);
      cancel();
    },
    capture(): ControlledValueSnapshot<T> | null {
      if (!controlled) {
        return null;
      }
      return {
        version,
        value: clone(committedValue),
      };
    },
    confirm(snapshot): void {
      if (!snapshot) {
        return;
      }
      cancel();
      const view = options.host.ownerDocument.defaultView;
      const schedule =
        view?.requestAnimationFrame.bind(view) ??
        ((callback: FrameRequestCallback) =>
          setTimeout(() => callback(Date.now()), 0) as unknown as number);

      frame = schedule(() => {
        frame = undefined;
        if (version !== snapshot.version) {
          return;
        }
        if (!equals(options.getValue(), snapshot.value)) {
          options.setValue(clone(snapshot.value));
        }
      });
    },
    dispose: cancel,
  };
}
