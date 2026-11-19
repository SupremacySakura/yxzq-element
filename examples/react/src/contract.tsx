import {
  Fragment,
  StrictMode,
  createElement,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "yxzq-element";
import {
  createDebugApi,
  createEventRecorder,
  getContractComponent,
  getContractEventNames,
  getContractInstanceCount,
  toDomAttributeValue,
  toReactEventProp,
  waitForElementReady,
} from "../../../tests/contract/client";
import type {
  ContractMount,
  ContractNode,
  ContractNodeChild,
} from "../../../tests/contract/types";

const stage = document.querySelector<HTMLElement>("#root");

if (!stage) {
  throw new Error("Contract stage is missing");
}

const component = getContractComponent();
const eventNames = getContractEventNames(component.tag);
const recorder = createEventRecorder();
const mountRef = { current: component.mount };
let element: HTMLElement | undefined;
let elements: HTMLElement[] = [];
let rerender: (() => void) | undefined;

function renderChild(child: ContractNodeChild): ReactNode {
  if (typeof child === "string") {
    return child;
  }
  return renderNode(child);
}

function renderNode(node: ContractNode): ReactNode {
  const attributes = Object.fromEntries(
    Object.entries(node.attributes ?? {}).map(([name, value]) => [
      name,
      typeof value === "boolean" ? value : toDomAttributeValue(value),
    ]),
  );

  return createElement(
    node.tag,
    { ...attributes, ...node.properties },
    ...(node.children ?? []).map(renderChild),
  );
}

function renderHost(currentMount: ContractMount, index: number): ReactNode {
  const attributes = Object.fromEntries(
    Object.entries(currentMount.attributes ?? {}).map(([name, value]) => [
      name,
      typeof value === "boolean" ? value : toDomAttributeValue(value),
    ]),
  );
  const listeners = Object.fromEntries(
    eventNames.map((name) => [
      toReactEventProp(name),
      (event: Event) => recorder.record(name, event),
    ]),
  );

  return createElement(
    component.tag,
    { key: index, ...attributes, ...currentMount.properties, ...listeners },
    ...(currentMount.children ?? []).map(renderChild),
  );
}

function ContractApp(): ReactNode {
  const [, setRenderVersion] = useState(0);
  const versionRef = useRef(setRenderVersion);
  versionRef.current = setRenderVersion;
  rerender = () => versionRef.current((version) => version + 1);

  const currentMount = mountRef.current;
  return createElement(
    Fragment,
    null,
    ...Array.from({ length: getContractInstanceCount() }, (_, index) =>
      renderHost(currentMount, index),
    ),
  );
}

const root = createRoot(stage);
const api = createDebugApi({
  framework: "react",
  tag: component.tag,
  eventNames,
  getElement: () => element,
  recorder,
  patch: async (patch) => {
    mountRef.current = {
      ...mountRef.current,
      ...patch,
      attributes: patch.attributes
        ? { ...mountRef.current.attributes, ...patch.attributes }
        : mountRef.current.attributes,
      properties: patch.properties
        ? { ...mountRef.current.properties, ...patch.properties }
        : mountRef.current.properties,
    };
    rerender?.();
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
    if (element) {
      await waitForElementReady(element);
    }
  },
  dispose: async () => {
    root.unmount();
    element = undefined;
    elements = [];
  },
});

window.addEventListener("error", (event) => {
  api.errors.push(event.error instanceof Error ? event.error.message : event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  api.errors.push(
    event.reason instanceof Error
      ? event.reason.message
      : String(event.reason ?? "Unknown rejection"),
  );
});

root.render(
  <StrictMode>
    <ContractApp />
  </StrictMode>,
);

await new Promise<void>((resolve) => {
  requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
});
elements = Array.from(stage.querySelectorAll<HTMLElement>(component.tag));
element = elements[0];

if (!element) {
  throw new Error(`React did not mount ${component.tag}`);
}

await Promise.all(elements.map((instance) => waitForElementReady(instance)));
api.ready = true;
