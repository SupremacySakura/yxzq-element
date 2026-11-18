import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperPagination,
  SUPER_PAGINATION_TAG,
  SuperPagination,
} from "./index.js";

const mountPagination = async () => {
  defineSuperPagination();
  const element = document.createElement(SUPER_PAGINATION_TAG);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperPagination", () => {
  it("registers the super-pagination tag idempotently", () => {
    expect(defineSuperPagination()).toBe(SuperPagination);
    expect(defineSuperPagination()).toBe(SuperPagination);
    expect(customElements.get(SUPER_PAGINATION_TAG)).toBe(SuperPagination);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountPagination();

    expect(element.total).toBe(0);
    expect(element.page).toBe(1);
    expect(element.pageSize).toBe(10);
    expect(element.pageSizes).toEqual([]);
    expect(element.size).toBe("medium");
    expect(element.disabled).toBe(false);
    expect(element.showTotal).toBe(false);
    expect(element.showJumper).toBe(false);
    expect(element.simple).toBe(false);
    expect(element.prevLabel).toBe("上一页");
    expect(element.nextLabel).toBe("下一页");
    expect(element.pageLabel).toBe("页码");
    expect(element.jumperLabel).toBe("跳至");
    expect(element.totalLabel).toBe("共");
    expect(element.itemsLabel).toBe("条");
    expect(element.pageSuffixLabel).toBe("页");

    element.total = 120;
    element.page = 3;
    element.pageSize = 20;
    element.size = "large";
    element.disabled = true;
    element.showTotal = true;
    element.showJumper = true;
    element.simple = true;
    element.prevLabel = "向前";
    element.nextLabel = "向后";
    element.pageLabel = "第几页";
    element.jumperLabel = "前往";
    element.totalLabel = "总计";
    element.itemsLabel = "项";
    element.pageSuffixLabel = "页码";
    await element.updateComplete;

    expect(element.getAttribute("total")).toBe("120");
    expect(element.getAttribute("page")).toBe("3");
    expect(element.getAttribute("page-size")).toBe("20");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.hasAttribute("show-total")).toBe(true);
    expect(element.hasAttribute("show-jumper")).toBe(true);
    expect(element.hasAttribute("simple")).toBe(true);
    expect(element.getAttribute("prev-label")).toBe("向前");
    expect(element.getAttribute("next-label")).toBe("向后");
    expect(element.getAttribute("page-label")).toBe("第几页");
    expect(element.getAttribute("jumper-label")).toBe("前往");
    expect(element.getAttribute("total-label")).toBe("总计");
    expect(element.getAttribute("items-label")).toBe("项");
    expect(element.getAttribute("page-suffix-label")).toBe("页码");
  });

  it("renders navigation semantics with a current page", async () => {
    const element = await mountPagination();
    element.total = 35;
    element.page = 2;
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector("nav");
    const current = element.shadowRoot?.querySelector('[aria-current="page"]');

    expect(nav?.getAttribute("role")).toBe("navigation");
    expect(nav?.getAttribute("aria-label")).toBe("分页导航");
    expect(current?.getAttribute("data-page")).toBe("2");
    expect(current?.getAttribute("aria-label")).toBe("页码 2");
    expect(
      element.shadowRoot?.querySelectorAll(".page-button"),
    ).toHaveLength(4);
  });

  it("collapses long page ranges with non-interactive ellipses", async () => {
    const element = await mountPagination();
    element.total = 200;
    element.page = 10;
    await element.updateComplete;

    const labels = Array.from(
      element.shadowRoot?.querySelectorAll(".page-button") ?? [],
    ).map((button) => button.textContent?.trim());
    const ellipses = element.shadowRoot?.querySelectorAll('[part="ellipsis"]');

    expect(labels).toEqual(["1", "9", "10", "11", "20"]);
    expect(ellipses).toHaveLength(2);
    expect(
      Array.from(ellipses ?? []).every(
        (ellipsis) => ellipsis.getAttribute("aria-hidden") === "true",
      ),
    ).toBe(true);
  });

  it("keeps a stable window near the first and last pages", async () => {
    const element = await mountPagination();
    element.total = 200;
    element.page = 1;
    await element.updateComplete;
    expect(
      Array.from(
        element.shadowRoot?.querySelectorAll(".page-button") ?? [],
      ).map((button) => button.textContent?.trim()),
    ).toEqual(["1", "2", "3", "4", "5", "20"]);

    element.page = 20;
    await element.updateComplete;
    expect(
      Array.from(
        element.shadowRoot?.querySelectorAll(".page-button") ?? [],
      ).map((button) => button.textContent?.trim()),
    ).toEqual(["1", "16", "17", "18", "19", "20"]);
  });

  it("dispatches a composed change event when a page is clicked", async () => {
    const element = await mountPagination();
    element.total = 50;
    element.page = 1;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-pagination-change", onChange);
    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[data-page="3"]')
      ?.click();

    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<{
      page: number;
      pageSize: number;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ page: 3, pageSize: 10 });
    expect(element.page).toBe(3);
  });

  it("moves to the previous and next page with disabled boundaries", async () => {
    const element = await mountPagination();
    element.total = 30;
    element.page = 1;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-pagination-change", onChange);
    const prev = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="prev"]',
    );
    const next = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="next"]',
    );

    expect(prev?.disabled).toBe(true);
    expect(next?.disabled).toBe(false);
    next?.click();
    await element.updateComplete;
    expect(element.page).toBe(2);
    expect(prev?.disabled).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);

    element.page = 3;
    await element.updateComplete;
    expect(next?.disabled).toBe(true);
  });

  it("changes page size and resets to the first page", async () => {
    const element = await mountPagination();
    element.total = 100;
    element.page = 4;
    element.pageSize = 10;
    element.pageSizes = [10, 20, 50];
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-pagination-change", onChange);
    const select = element.shadowRoot?.querySelector<HTMLSelectElement>(
      '[part="page-size-select"]',
    );
    const options = Array.from(select?.options ?? []).map(
      (option) => option.value,
    );
    expect(options).toEqual(["10", "20", "50"]);

    if (select) {
      select.value = "20";
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<{
      page: number;
      pageSize: number;
    }>;
    expect(event.detail).toEqual({ page: 1, pageSize: 20 });
    expect(element.pageSize).toBe(20);
    expect(element.page).toBe(1);
  });

  it("jumps to a clamped page on Enter", async () => {
    const element = await mountPagination();
    element.total = 95;
    element.page = 2;
    element.showJumper = true;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-pagination-change", onChange);
    const input = element.shadowRoot?.querySelector<HTMLInputElement>(
      '[part="jumper-input"]',
    );
    if (input) {
      input.value = "999";
      input.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
          bubbles: true,
          composed: true,
          cancelable: true,
        }),
      );
    }
    await element.updateComplete;

    expect(element.page).toBe(10);
    expect(input?.value).toBe("10");
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<{
      page: number;
      pageSize: number;
    }>;
    expect(event.detail).toEqual({ page: 10, pageSize: 10 });
  });

  it("uses simple mode without a page list but keeps previous and next", async () => {
    const element = await mountPagination();
    element.total = 42;
    element.page = 2;
    element.simple = true;
    element.showJumper = true;
    element.pageSizes = [10, 20];
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector(".page-button")).toBeNull();
    expect(element.shadowRoot?.querySelector('[part="prev"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="next"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="jumper-input"]')).toBeNull();
    expect(element.shadowRoot?.querySelector('[part="page-size-select"]'))
      .toBeNull();
    expect(
      element.shadowRoot?.querySelector('[part="simple-status"]')?.textContent
        ?.replace(/\s+/g, " ")
        .trim(),
    ).toBe("2 / 5 页");
  });

  it("renders total text and all Chinese labels through attributes", async () => {
    const element = await mountPagination();
    element.total = 7;
    element.showTotal = true;
    element.totalLabel = "总计";
    element.itemsLabel = "项";
    await element.updateComplete;

    expect(
      element.shadowRoot?.querySelector('[part="total"]')?.textContent
        ?.replace(/\s+/g, " ")
        .trim(),
    ).toBe("总计 7 项");
  });

  it("disables every control when disabled is set", async () => {
    const element = await mountPagination();
    element.total = 100;
    element.page = 3;
    element.disabled = true;
    element.showJumper = true;
    element.pageSizes = [10, 20];
    await element.updateComplete;

    const controls = Array.from(
      element.shadowRoot?.querySelectorAll<
        HTMLButtonElement | HTMLInputElement | HTMLSelectElement
      >("button, input, select") ?? [],
    );
    expect(controls.length).toBeGreaterThan(0);
    expect(controls.every((control) => control.disabled)).toBe(true);
  });

  it("supports arrow and boundary keys across page buttons", async () => {
    const element = await mountPagination();
    element.total = 100;
    element.page = 3;
    await element.updateComplete;

    const pages = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="pages"]',
    );
    const buttons = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(".page-button") ??
        [],
    );
    buttons[0]?.focus();
    pages?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(element.shadowRoot?.activeElement).toBe(buttons[1]);

    pages?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(element.shadowRoot?.activeElement).toBe(
      buttons[buttons.length - 1],
    );
  });
});
