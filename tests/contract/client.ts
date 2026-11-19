import {
  COMPONENTS_BY_TAG,
  EVENTS_BY_TAG,
} from "./manifest";
import type {
  ContractComponent,
  ContractDebugApi,
  ContractFramework,
  ContractMount,
  RecordedContractEvent,
} from "./types";

export const CONTRACT_PARAM = "tag";
export const CONTRACT_COUNT_PARAM = "count";

export function getContractInstanceCount(): number {
  const raw = new URLSearchParams(window.location.search).get(
    CONTRACT_COUNT_PARAM,
  );
  const count = raw === null ? 1 : Number(raw);
  return Number.isInteger(count) && count > 0 && count <= 10 ? count : 1;
}

export function getContractComponent(): ContractComponent {
  const tag = new URLSearchParams(window.location.search).get(CONTRACT_PARAM);
  const component = tag
    ? COMPONENTS_BY_TAG.get(tag as `super-${string}`)
    : undefined;

  if (!component) {
    throw new Error(
      `Unknown or missing contract component tag: ${String(tag ?? "")}`,
    );
  }

  return component;
}

export function getContractEventNames(tag: string): string[] {
  return (EVENTS_BY_TAG.get(tag) ?? []).map((event) => event.name);
}

export function getNameAlias(tag: string): string {
  const component = COMPONENTS_BY_TAG.get(tag as `super-${string}`);
  if (!component) {
    throw new Error(`Unknown component tag: ${tag}`);
  }
  return component.name;
}

export function createEventRecorder(): {
  events: RecordedContractEvent[];
  record(name: string, event: Event): void;
  reset(): void;
} {
  const events: RecordedContractEvent[] = [];

  return {
    events,
    record(name: string, event: Event): void {
      events.push({
        name,
        detail: (event as CustomEvent<unknown>).detail,
        bubbles: event.bubbles,
        composed: event.composed,
      });
    },
    reset(): void {
      events.length = 0;
    },
  };
}

export function toVueEventProp(name: string): string {
  return `on${name
    .split("-")
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("")}`;
}

export function toReactEventProp(name: string): string {
  return `on${name}`;
}

export function toDomAttributeValue(
  value: string | number | boolean | null | undefined,
): string | null {
  if (value === null || value === undefined || value === false) {
    return null;
  }
  return value === true ? "" : String(value);
}

export function getPatchableProperties(
  element: HTMLElement,
  properties: Record<string, unknown>,
): void {
  Object.assign(element, properties);
}

export function createDebugApi(options: {
  framework: ContractFramework;
  tag: string;
  eventNames: string[];
  getElement: () => HTMLElement | undefined;
  patch: (patch: ContractMount) => Promise<void>;
  dispose: () => Promise<void>;
  recorder: ReturnType<typeof createEventRecorder>;
}): ContractDebugApi {
  const api: ContractDebugApi = {
    ready: false,
    framework: options.framework,
    tag: options.tag,
    errors: [],
    events: options.recorder.events,
    resetEvents: () => options.recorder.reset(),
    dispatch: (name, detail) => {
      const element = options.getElement();
      if (!element) {
        throw new Error("Contract element is not mounted");
      }
      element.dispatchEvent(
        new CustomEvent(name, {
          detail,
          bubbles: true,
          composed: true,
        }),
      );
    },
    patch: options.patch,
    dispose: options.dispose,
  };

  window.__SUPER_CONTRACT__ = api;
  return api;
}

export async function waitForElementReady(
  element: HTMLElement,
): Promise<void> {
  await customElements.whenDefined(element.localName);
  await document.fonts.ready;

  const litElement = element as HTMLElement & {
    updateComplete?: Promise<boolean>;
  };
  await litElement.updateComplete;

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export function toStyleSafeTag(tag: string): string {
  return tag.replace(/[^a-z0-9-]/gi, "-");
}
