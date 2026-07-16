export type CustomElementClass = CustomElementConstructor;

const defaultRegistry = (): CustomElementRegistry | undefined =>
  typeof customElements === "undefined" ? undefined : customElements;

/**
 * Defines a custom element once and remains safe when imported during SSR.
 */
export function defineCustomElement<T extends CustomElementClass>(
  tagName: string,
  elementClass: T,
  registry: CustomElementRegistry | undefined = defaultRegistry(),
): T {
  if (!registry) {
    return elementClass;
  }

  const registeredClass = registry.get(tagName);
  if (registeredClass) {
    return registeredClass as T;
  }

  registry.define(tagName, elementClass);
  return elementClass;
}
