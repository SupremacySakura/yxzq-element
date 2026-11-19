import "yxzq-element";
import {
  createDebugApi,
  createEventRecorder,
  getContractComponent,
  getContractEventNames,
  getContractInstanceCount,
  toDomAttributeValue,
  waitForElementReady,
} from "../../../tests/contract/client";
import type {
  ContractMount,
  ContractNode,
  ContractNodeChild,
} from "../../../tests/contract/types";

const stage = document.querySelector<HTMLElement>("#stage");

if (!stage) {
  throw new Error("Contract stage is missing");
}

const component = getContractComponent();
const eventNames = getContractEventNames(component.tag);
const recorder = createEventRecorder();
let element: HTMLElement | undefined;
const elements: HTMLElement[] = [];

function renderChild(child: ContractNodeChild): Node {
  if (typeof child === "string") {
    return document.createTextNode(child);
  }
  return renderNode(child);
}

function renderNode(node: ContractNode): HTMLElement {
  const childElement = document.createElement(node.tag);

  for (const [name, value] of Object.entries(node.attributes ?? {})) {
    const attributeValue = toDomAttributeValue(value);
    if (attributeValue === null) {
      childElement.removeAttribute(name);
    } else {
      childElement.setAttribute(name, attributeValue);
    }
  }

  Object.assign(childElement, node.properties ?? {});
  childElement.append(...(node.children ?? []).map(renderChild));
  return childElement;
}

function applyMount(target: HTMLElement, mount: ContractMount): void {
  for (const [name, value] of Object.entries(mount.attributes ?? {})) {
    const attributeValue = toDomAttributeValue(value);
    if (attributeValue === null) {
      target.removeAttribute(name);
    } else {
      target.setAttribute(name, attributeValue);
    }
  }

  Object.assign(target, mount.properties ?? {});

  if (mount.children) {
    target.replaceChildren(...mount.children.map(renderChild));
  }
}

const api = createDebugApi({
  framework: "html",
  tag: component.tag,
  eventNames,
  getElement: () => element,
  recorder,
  patch: async (patch) => {
    if (!element) {
      throw new Error("Contract element is not mounted");
    }
    applyMount(element, patch);
    await waitForElementReady(element);
  },
  dispose: async () => {
    for (const instance of elements) {
      instance.remove();
    }
    elements.length = 0;
    element = undefined;
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

for (let index = 0; index < getContractInstanceCount(); index += 1) {
  const instance = document.createElement(component.tag);
  for (const eventName of eventNames) {
    instance.addEventListener(eventName, (event) =>
      recorder.record(eventName, event),
    );
  }
  applyMount(instance, component.mount);
  stage.append(instance);
  elements.push(instance);
}

element = elements[0];
await Promise.all(elements.map((instance) => waitForElementReady(instance)));
api.ready = true;
