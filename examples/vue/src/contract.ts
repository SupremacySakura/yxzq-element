import { createApp, h, nextTick, shallowRef } from "vue";
import type { VNode } from "vue";
import "yxzq-element";
import {
  createDebugApi,
  createEventRecorder,
  getContractComponent,
  getContractEventNames,
  getContractInstanceCount,
  toDomAttributeValue,
  toVueEventProp,
  waitForElementReady,
} from "../../../tests/contract/client";
import type {
  ContractMount,
  ContractNode,
  ContractNodeChild,
} from "../../../tests/contract/types";

const stage = document.querySelector<HTMLElement>("#app");

if (!stage) {
  throw new Error("Contract stage is missing");
}

const component = getContractComponent();
const eventNames = getContractEventNames(component.tag);
const recorder = createEventRecorder();
const mount = shallowRef<ContractMount>(component.mount);
let element: HTMLElement | undefined;
let elements: HTMLElement[] = [];

function renderChild(child: ContractNodeChild): VNode | string {
  if (typeof child === "string") {
    return child;
  }
  return renderNode(child);
}

function renderNode(node: ContractNode): VNode {
  const attributes = Object.fromEntries(
    Object.entries(node.attributes ?? {}).map(([name, value]) => [
      name,
      typeof value === "boolean" ? value : toDomAttributeValue(value),
    ]),
  );

  return h(
    node.tag,
    { ...attributes, ...node.properties },
    node.children?.map(renderChild),
  );
}

function renderHost(currentMount: ContractMount, index: number): VNode {
  const attributes = Object.fromEntries(
    Object.entries(currentMount.attributes ?? {}).map(([name, value]) => [
      name,
      typeof value === "boolean" ? value : toDomAttributeValue(value),
    ]),
  );
  const listeners = Object.fromEntries(
    eventNames.map((name) => [
      toVueEventProp(name),
      (event: Event) => recorder.record(name, event),
    ]),
  );

  return h(
    component.tag,
    { key: index, ...attributes, ...currentMount.properties, ...listeners },
    currentMount.children?.map(renderChild),
  );
}

const app = createApp({
  render: () =>
    Array.from({ length: getContractInstanceCount() }, (_, index) =>
      renderHost(mount.value, index),
    ),
});

const api = createDebugApi({
  framework: "vue",
  tag: component.tag,
  eventNames,
  getElement: () => element,
  recorder,
  patch: async (patch) => {
    mount.value = {
      ...mount.value,
      ...patch,
      attributes: patch.attributes
        ? { ...mount.value.attributes, ...patch.attributes }
        : mount.value.attributes,
      properties: patch.properties
        ? { ...mount.value.properties, ...patch.properties }
        : mount.value.properties,
    };
    await nextTick();
    if (element) {
      await waitForElementReady(element);
    }
  },
  dispose: async () => {
    app.unmount();
    element = undefined;
    elements = [];
  },
});

app.config.errorHandler = (error) => {
  api.errors.push(error instanceof Error ? error.message : String(error));
};

app.mount(stage);
await nextTick();
elements = Array.from(stage.querySelectorAll<HTMLElement>(component.tag));
element = elements[0];

if (!element) {
  throw new Error(`Vue did not mount ${component.tag}`);
}

await Promise.all(elements.map((instance) => waitForElementReady(instance)));
api.ready = true;
