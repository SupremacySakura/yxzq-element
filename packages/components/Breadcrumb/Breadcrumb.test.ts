import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperBreadcrumb,
  SUPER_BREADCRUMB_TAG,
  SuperBreadcrumb,
} from "./index.js";

const mountBreadcrumb = async () => {
  defineSuperBreadcrumb();
  const element = document.createElement(SUPER_BREADCRUMB_TAG);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperBreadcrumb", () => {
  it("registers the super-breadcrumb tag idempotently", () => {
    expect(defineSuperBreadcrumb()).toBe(SuperBreadcrumb);
    expect(defineSuperBreadcrumb()).toBe(SuperBreadcrumb);
    expect(customElements.get(SUPER_BREADCRUMB_TAG)).toBe(SuperBreadcrumb);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountBreadcrumb();

    expect(element.separator).toBe("/");
    expect(element.size).toBe("medium");
    expect(element.maxItems).toBe(0);
    expect(element.accessibleLabel).toBe("面包屑导航");
    expect(element.items).toEqual([]);

    element.separator = "›";
    element.size = "large";
    element.maxItems = 4;
    element.accessibleLabel = "当前位置";
    await element.updateComplete;

    expect(element.getAttribute("separator")).toBe("›");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("max-items")).toBe("4");
    expect(element.getAttribute("aria-label")).toBe("当前位置");
  });

  it("renders nav, ordered list and semantic links for items", async () => {
    const element = await mountBreadcrumb();
    element.items = [
      { label: "首页", href: "/" },
      { label: "组件", href: "/components" },
      { label: "导航", current: true },
    ];
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector('[part="breadcrumb"]');
    const list = element.shadowRoot?.querySelector('[part="list"]');
    const items = element.shadowRoot?.querySelectorAll("li");
    const links = element.shadowRoot?.querySelectorAll("a");
    const current = element.shadowRoot?.querySelector('[aria-current="page"]');
    const separators = element.shadowRoot?.querySelectorAll(
      '[part="separator"]',
    );

    expect(nav?.tagName).toBe("NAV");
    expect(nav?.getAttribute("aria-label")).toBe("面包屑导航");
    expect(list?.tagName).toBe("OL");
    expect(items).toHaveLength(3);
    expect(links).toHaveLength(2);
    expect(links?.[0]?.getAttribute("href")).toBe("/");
    expect(links?.[1]?.getAttribute("href")).toBe("/components");
    expect(current?.tagName).toBe("SPAN");
    expect(current?.textContent?.trim()).toBe("导航");
    expect(separators).toHaveLength(2);
    expect(
      Array.from(separators ?? []).every(
        (separator) => separator.getAttribute("aria-hidden") === "true",
      ),
    ).toBe(true);
  });

  it("renders a localizable separator between items", async () => {
    const element = await mountBreadcrumb();
    element.separator = "→";
    element.items = [
      { label: "一", href: "#one" },
      { label: "二", href: "#two" },
    ];
    await element.updateComplete;

    const separators = element.shadowRoot?.querySelectorAll(
      '[part="separator"]',
    );
    expect(separators?.[0]?.textContent?.trim()).toBe("→");
  });

  it("keeps the separator CSS hook available for consumer content", async () => {
    const element = await mountBreadcrumb();
    const first = document.createElement("li");
    first.textContent = "一";
    const second = document.createElement("li");
    second.textContent = "二";
    element.append(first, second);
    await element.updateComplete;

    expect(
      element.shadowRoot
        ?.querySelector<HTMLElement>('[part="breadcrumb"]')
        ?.getAttribute("style"),
    ).toBeNull();
  });

  it("collapses middle items into a non-interactive ellipsis", async () => {
    const element = await mountBreadcrumb();
    element.maxItems = 4;
    element.items = [
      { label: "一", href: "#one" },
      { label: "二", href: "#two" },
      { label: "三", href: "#three" },
      { label: "四", href: "#four" },
      { label: "五", href: "#five" },
      { label: "六", current: true },
    ];
    await element.updateComplete;

    const labels = Array.from(
      element.shadowRoot?.querySelectorAll("li") ?? [],
    ).map((item) => item.textContent?.replace(/\s+/g, " ").trim());
    const ellipsis = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="ellipsis"]',
    );
    const links = element.shadowRoot?.querySelectorAll("a");

    expect(labels).toHaveLength(4);
    expect(labels[0]).toContain("一");
    expect(labels[1]).toContain("二");
    expect(labels[2]).toContain("…");
    expect(labels[3]).toContain("六");
    expect(ellipsis?.closest("li")?.getAttribute("aria-hidden")).toBe("true");
    expect(ellipsis?.closest("li")?.querySelector("a, button")).toBeNull();
    expect(links).toHaveLength(2);
    expect(element.shadowRoot?.querySelector('[aria-current="page"]'))
      .not.toBeNull();
  });

  it("keeps all items when maxItems is zero or not exceeded", async () => {
    const element = await mountBreadcrumb();
    element.items = [
      { label: "一", href: "#one" },
      { label: "二", href: "#two" },
      { label: "三", current: true },
    ];
    await element.updateComplete;
    expect(element.shadowRoot?.querySelectorAll("li")).toHaveLength(3);

    element.maxItems = 3;
    await element.updateComplete;
    expect(element.shadowRoot?.querySelectorAll("li")).toHaveLength(3);
    expect(element.shadowRoot?.querySelector('[part="ellipsis"]')).toBeNull();
  });

  it("renders consumer-provided content through the default slot", async () => {
    const element = await mountBreadcrumb();
    const first = document.createElement("li");
    const link = document.createElement("a");
    link.href = "/";
    link.textContent = "首页";
    first.append(link);
    const second = document.createElement("li");
    second.setAttribute("aria-current", "page");
    second.textContent = "当前";
    element.append(first, second);
    await element.updateComplete;

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>("slot");
    expect(slot?.assignedElements()).toEqual([first, second]);
    expect(element.shadowRoot?.querySelectorAll("li")).toHaveLength(0);
  });

  it("uses native anchors so links remain keyboard focusable", async () => {
    const element = await mountBreadcrumb();
    element.items = [
      { label: "首页", href: "/" },
      { label: "当前", current: true },
    ];
    await element.updateComplete;

    const link = element.shadowRoot?.querySelector<HTMLAnchorElement>(
      '[part="link"]',
    );
    link?.focus();

    expect(link?.tagName).toBe("A");
    expect(link?.tabIndex).toBe(0);
    expect(element.shadowRoot?.activeElement).toBe(link);
  });
});
