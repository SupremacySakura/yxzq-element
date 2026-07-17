import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperSelect,
  SUPER_SELECT_TAG,
  SuperSelect,
} from "./index.js";

const createOption = (
  value: string,
  label: string,
  properties: Partial<Pick<HTMLOptionElement, "disabled" | "hidden" | "selected">> = {},
): HTMLOptionElement => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  Object.assign(option, properties);
  return option;
};

const settle = async (element: SuperSelect): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountSelect = async (
  configure?: (element: SuperSelect) => void,
): Promise<SuperSelect> => {
  defineSuperSelect();
  const element = document.createElement(SUPER_SELECT_TAG);
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getCombobox = (element: SuperSelect) =>
  element.shadowRoot?.querySelector<HTMLElement>('[role="combobox"]');

const getRenderedOptions = (element: SuperSelect) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLElement>('[role="option"]') ?? [],
  );

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperSelect", () => {
  it("registers super-select idempotently and exposes stable defaults", async () => {
    expect(defineSuperSelect()).toBe(SuperSelect);
    expect(defineSuperSelect()).toBe(SuperSelect);
    expect(customElements.get(SUPER_SELECT_TAG)).toBe(SuperSelect);

    const element = await mountSelect();
    expect(element.value).toBe("");
    expect(element.size).toBe("medium");
    expect(element.variant).toBe("default");
    expect(element.validation).toBe("none");
    expect(element.placeholder).toBe("请选择");
    expect(element.clearLabel).toBe("清空选择");
    expect(element.removeLabel).toBe("移除");
    expect(element.searchLabel).toBe("搜索选项");
    expect(element.emptyText).toBe("暂无可选项");
  });

  it("adopts selected native options and renders optgroup semantics", async () => {
    const element = await mountSelect((select) => {
      const group = document.createElement("optgroup");
      group.label = "华东";
      group.append(
        createOption("shanghai", "上海"),
        createOption("hangzhou", "杭州", { selected: true }),
      );
      select.append(group);
    });

    expect(element.value).toBe("hangzhou");
    expect(
      element.querySelector<HTMLOptionElement>('option[value="hangzhou"]')
        ?.selected,
    ).toBe(true);

    element.click();
    await settle(element);

    expect(element.shadowRoot?.querySelector('[part="group"]')?.getAttribute("role"))
      .toBe("group");
    expect(element.shadowRoot?.querySelector('[part="group-label"]')?.textContent)
      .toBe("华东");
    expect(getRenderedOptions(element)).toHaveLength(2);
    expect(getRenderedOptions(element)[1]?.getAttribute("aria-selected")).toBe("true");
  });

  it("keeps an explicit host value authoritative during first connection", async () => {
    const element = await mountSelect((select) => {
      select.setAttribute("value", "shanghai");
      select.append(
        createOption("shanghai", "上海"),
        createOption("hangzhou", "杭州", { selected: true }),
      );
    });

    expect(element.value).toBe("shanghai");
    expect(Array.from(
      element.querySelectorAll<HTMLOptionElement>("option"),
      (option) => option.selected,
    ))
      .toEqual([true, false]);
  });

  it("treats an explicitly assigned empty multiple value as controlled", async () => {
    const selected = createOption("a", "A", { selected: true });
    const element = await mountSelect((select) => {
      select.multiple = true;
      select.value = [];
      select.append(selected);
    });

    expect(element.value).toEqual([]);
    expect(selected.selected).toBe(false);
  });

  it("preserves a controlled value while opening and rebuilding options", async () => {
    const element = await mountSelect((select) => {
      select.append(createOption("a", "A"), createOption("b", "B"));
    });

    element.value = "b";
    element.click();
    await settle(element);
    expect(element.value).toBe("b");

    const temporary = createOption("c", "临时 C");
    element.replaceChildren(temporary);
    await settle(element);
    expect(element.value).toBe("b");
    expect(temporary.selected).toBe(false);

    const replacementA = createOption("a", "新 A");
    const replacementB = createOption("b", "新 B");
    element.replaceChildren(replacementA, replacementB);
    await settle(element);

    expect(element.value).toBe("b");
    expect([replacementA.selected, replacementB.selected]).toEqual([false, true]);
  });

  it("keeps a controlled value when an existing selected-attribute option is reordered", async () => {
    const first = createOption("a", "A");
    first.setAttribute("selected", "");
    const second = createOption("b", "B");
    const element = await mountSelect((select) => {
      select.append(first, second);
    });

    element.value = "b";
    await settle(element);
    expect([first.selected, second.selected]).toEqual([false, true]);

    element.append(first);
    await settle(element);

    expect(element.value).toBe("b");
    expect([first.selected, second.selected]).toEqual([false, true]);

    first.remove();
    await settle(element);
    element.append(first);
    await settle(element);

    expect(element.value).toBe("b");
    expect([first.selected, second.selected]).toEqual([false, true]);
  });

  it("adopts a selected attribute from a genuinely new option", async () => {
    const element = await mountSelect((select) => {
      select.value = "a";
      select.append(createOption("a", "A"));
    });
    const added = createOption("b", "B");
    added.setAttribute("selected", "");

    element.append(added);
    added.remove();
    await settle(element);
    element.append(added);
    element.click();
    await settle(element);

    expect(element.value).toBe("b");
    expect(added.selected).toBe(true);
  });

  it("adopts selected attribute changes made while disconnected", async () => {
    const first = createOption("a", "A");
    first.setAttribute("selected", "");
    const second = createOption("b", "B");
    const element = await mountSelect((select) => {
      select.append(first, second);
    });

    element.remove();
    first.removeAttribute("selected");
    second.setAttribute("selected", "");
    document.body.append(element);
    await settle(element);

    expect(element.value).toBe("b");
    expect([first.selected, second.selected]).toEqual([false, true]);
  });

  it("adopts selected attribute changes made while a known option is detached", async () => {
    const first = createOption("a", "A");
    const second = createOption("b", "B");
    const third = createOption("c", "C");
    const element = await mountSelect((select) => {
      select.value = "b";
      select.append(first, second, third);
    });

    third.remove();
    await settle(element);
    third.setAttribute("selected", "");
    element.append(third);
    await settle(element);

    expect(element.value).toBe("c");
    expect([first.selected, second.selected, third.selected])
      .toEqual([false, false, true]);
  });

  it("consumes pending selected mutations before disconnecting", async () => {
    const first = createOption("a", "A");
    first.setAttribute("selected", "");
    const second = createOption("b", "B");
    const element = await mountSelect((select) => {
      select.append(first, second);
    });

    second.setAttribute("selected", "");
    element.remove();
    document.body.append(element);
    await settle(element);

    expect(element.value).toBe("b");
    expect([first.selected, second.selected]).toEqual([false, true]);
  });

  it("keeps a controlled value on reconnection when selected attributes did not change", async () => {
    const first = createOption("a", "A");
    first.setAttribute("selected", "");
    const second = createOption("b", "B");
    const element = await mountSelect((select) => {
      select.append(first, second);
    });

    element.value = "b";
    await settle(element);
    element.remove();
    document.body.append(element);
    await settle(element);

    expect(element.value).toBe("b");
    expect([first.selected, second.selected]).toEqual([false, true]);
  });

  it("does not adopt an option value mutation until explicitly refreshed", async () => {
    const option = createOption("b", "B");
    const element = await mountSelect((select) => {
      select.value = "b";
      select.append(option);
    });

    option.value = "b2";
    await settle(element);
    expect(element.value).toBe("b");
    expect(option.selected).toBe(false);

    option.selected = true;
    element.refreshOptions();
    await settle(element);
    expect(element.value).toBe("b2");
  });

  it("requires refreshOptions for dynamically appended property-only selection", async () => {
    const element = await mountSelect((select) => {
      select.value = "a";
      select.append(createOption("a", "A"));
    });
    const appended = createOption("b", "B", { selected: true });

    element.append(appended);
    await settle(element);
    expect(element.value).toBe("a");
    expect(appended.selected).toBe(false);

    appended.selected = true;
    element.refreshOptions();
    await settle(element);
    expect(element.value).toBe("b");
  });

  it("selects a single option and emits composed change and open events", async () => {
    const element = await mountSelect((select) => {
      select.name = "city";
      select.append(
        createOption("shanghai", "上海"),
        createOption("hangzhou", "杭州"),
      );
    });
    const onChange = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-select-change", onChange);
    element.addEventListener("super-select-open-change", onOpenChange);

    element.click();
    await settle(element);
    getRenderedOptions(element)[1]?.click();
    await settle(element);

    expect(element.value).toBe("hangzhou");
    expect(element.open).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);
    const changeEvent = onChange.mock.calls[0]?.[0];
    expect(changeEvent.detail).toMatchObject({
      value: "hangzhou",
      values: ["hangzhou"],
      name: "city",
    });
    expect(changeEvent.detail.selectedOptions).toEqual([
      element.querySelector('option[value="hangzhou"]'),
    ]);
    expect(changeEvent.bubbles).toBe(true);
    expect(changeEvent.composed).toBe(true);
    expect(onOpenChange.mock.calls.map(([event]) => event.detail.open))
      .toEqual([true, false]);
    expect(onOpenChange.mock.calls[1]?.[0].detail.reason).toBe("selection");
  });

  it("supports multiple selection, persistent panels and removable tags", async () => {
    const element = await mountSelect((select) => {
      select.multiple = true;
      select.append(
        createOption("food", "美食"),
        createOption("travel", "旅行"),
        createOption("photo", "摄影"),
      );
    });
    const onChange = vi.fn();
    element.addEventListener("super-select-change", onChange);

    element.click();
    await settle(element);
    getRenderedOptions(element)[0]?.click();
    await settle(element);
    getRenderedOptions(element)[1]?.click();
    await settle(element);

    expect(element.value).toEqual(["food", "travel"]);
    expect(element.open).toBe(true);
    expect(element.shadowRoot?.querySelectorAll('[part="tag"]')).toHaveLength(2);
    expect(onChange).toHaveBeenCalledTimes(2);

    element.shadowRoot?.querySelector<HTMLButtonElement>('[part="tag-remove"]')
      ?.click();
    await settle(element);

    expect(element.value).toEqual(["travel"]);
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it("clears selections and localizes built-in action names", async () => {
    const element = await mountSelect((select) => {
      select.multiple = true;
      select.clearable = true;
      select.clearLabel = "Clear selection";
      select.removeLabel = "Remove option";
      select.value = ["food", "travel"];
      select.append(
        createOption("food", "美食"),
        createOption("travel", "旅行"),
      );
    });
    const onClear = vi.fn();
    const onChange = vi.fn();
    element.addEventListener("super-select-clear", onClear);
    element.addEventListener("super-select-change", onChange);

    expect(
      element.shadowRoot?.querySelector('[part="tag-remove"]')
        ?.getAttribute("aria-label"),
    ).toBe("Remove option：美食");
    const clear = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="clear-button"]',
    );
    expect(clear?.getAttribute("aria-label")).toBe("Clear selection");
    clear?.click();
    await settle(element);

    expect(element.value).toEqual([]);
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onClear.mock.calls[0]?.[0].detail.previousValue)
      .toEqual(["food", "travel"]);
    expect(onClear.mock.calls[0]?.[0].composed).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("keeps selected disabled options locked during tag removal and clear", async () => {
    const element = await mountSelect((select) => {
      select.multiple = true;
      select.clearable = true;
      select.value = ["locked", "free"];
      select.append(
        createOption("locked", "固定选项", { disabled: true }),
        createOption("free", "可移除选项"),
      );
    });

    expect(element.shadowRoot?.querySelectorAll('[part="tag-remove"]')).toHaveLength(1);
    element.shadowRoot?.querySelector<HTMLButtonElement>('[part="clear-button"]')
      ?.click();
    await settle(element);

    expect(element.value).toEqual(["locked"]);
    expect(element.shadowRoot?.querySelector('[part="clear-button"]')).toBeNull();
  });

  it("opens while typing, filters options and reports search queries", async () => {
    const element = await mountSelect((select) => {
      select.searchable = true;
      select.searchLabel = "Search cities";
      select.append(
        createOption("shanghai", "上海", { selected: true }),
        createOption("shenzhen", "深圳"),
        createOption("hangzhou", "杭州"),
      );
    });
    const onSearch = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-select-search", onSearch);
    element.addEventListener("super-select-open-change", onOpenChange);
    const input = getCombobox(element) as HTMLInputElement | undefined;
    expect(input?.getAttribute("aria-label")).toBe("Search cities");
    expect(input?.value).toBe("上海");
    if (!input) return;

    input.value = "深";
    input.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    await settle(element);

    expect(element.open).toBe(true);
    expect(getRenderedOptions(element).map((option) => option.textContent?.trim()))
      .toEqual(["深圳"]);
    expect(onSearch.mock.calls[0]?.[0].detail.query).toBe("深");
    expect(onSearch.mock.calls[0]?.[0].composed).toBe(true);
    expect(onOpenChange.mock.calls[0]?.[0].detail.reason).toBe("search");
    const homeEvent = new KeyboardEvent("keydown", {
      key: "Home",
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    input.dispatchEvent(homeEvent);
    expect(homeEvent.defaultPrevented).toBe(false);

    input.value = "不存在";
    input.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    await settle(element);
    expect(getRenderedOptions(element)).toHaveLength(0);
    expect(element.shadowRoot?.querySelector('[part="empty"]')?.textContent)
      .toContain("暂无可选项");
  });

  it("navigates by keyboard, skips disabled options and selects the active item", async () => {
    const element = await mountSelect((select) => {
      select.append(
        createOption("a", "选项 A"),
        createOption("b", "选项 B", { disabled: true }),
        createOption("c", "选项 C"),
      );
    });
    const combobox = getCombobox(element);
    if (!combobox) return;

    combobox.dispatchEvent(new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
      composed: true,
    }));
    await settle(element);
    expect(element.open).toBe(true);
    expect(combobox.getAttribute("aria-activedescendant"))
      .toBe(getRenderedOptions(element)[0]?.id);

    const scrollIntoView = vi.fn();
    Object.defineProperty(getRenderedOptions(element)[2] as HTMLElement, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });
    combobox.dispatchEvent(new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
      composed: true,
    }));
    await settle(element);
    expect(combobox.getAttribute("aria-activedescendant"))
      .toBe(getRenderedOptions(element)[2]?.id);
    expect(scrollIntoView).toHaveBeenCalledWith({ block: "nearest" });

    combobox.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      composed: true,
    }));
    await settle(element);
    expect(element.value).toBe("c");
    expect(element.open).toBe(false);
  });

  it("resets typeahead before handling keys after reconnection", async () => {
    vi.useFakeTimers();
    try {
      const element = await mountSelect((select) => {
        select.append(
          createOption("apple", "Apple"),
          createOption("banana", "Banana"),
        );
      });
      const combobox = getCombobox(element);
      if (!combobox) return;

      combobox.dispatchEvent(new KeyboardEvent("keydown", {
        key: "a",
        bubbles: true,
        composed: true,
      }));
      await settle(element);
      expect(combobox.getAttribute("aria-activedescendant"))
        .toBe(getRenderedOptions(element)[0]?.id);

      element.remove();
      vi.advanceTimersByTime(700);
      document.body.append(element);
      await settle(element);

      getCombobox(element)?.dispatchEvent(new KeyboardEvent("keydown", {
        key: "b",
        bubbles: true,
        composed: true,
      }));
      await settle(element);

      expect(getCombobox(element)?.getAttribute("aria-activedescendant"))
        .toBe(getRenderedOptions(element)[1]?.id);
    } finally {
      vi.useRealTimers();
    }
  });

  it("tracks option and optgroup mutations without rebuilding the host", async () => {
    let group!: HTMLOptGroupElement;
    let second!: HTMLOptionElement;
    const element = await mountSelect((select) => {
      group = document.createElement("optgroup");
      group.label = "华东";
      second = createOption("hangzhou", "杭州");
      group.append(createOption("shanghai", "上海"), second);
      select.append(group);
    });

    group.label = "热门城市";
    second.textContent = "杭州 · 西湖";
    second.setAttribute("selected", "");
    await settle(element);

    expect(element.value).toBe("hangzhou");
    element.click();
    await settle(element);
    expect(element.shadowRoot?.querySelector('[part="group-label"]')?.textContent)
      .toBe("热门城市");
    expect(getRenderedOptions(element)[1]?.textContent).toContain("杭州 · 西湖");
  });

  it("offers refreshOptions for property-only native option updates", async () => {
    let first!: HTMLOptionElement;
    let second!: HTMLOptionElement;
    const element = await mountSelect((select) => {
      first = createOption("a", "A", { selected: true });
      second = createOption("b", "B");
      select.append(first, second);
    });
    const onChange = vi.fn();
    element.addEventListener("super-select-change", onChange);

    first.selected = false;
    second.selected = true;
    element.refreshOptions();
    await settle(element);

    expect(element.value).toBe("b");
    expect(onChange).not.toHaveBeenCalled();

    element.value = "a";
    await settle(element);
    expect([first.selected, second.selected]).toEqual([true, false]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("guards disabled, readonly and loading interaction states", async () => {
    const element = await mountSelect((select) => {
      select.clearable = true;
      select.value = "a";
      select.append(createOption("a", "选项 A"), createOption("b", "选项 B"));
    });

    element.disabled = true;
    await settle(element);
    element.click();
    expect(element.open).toBe(false);
    expect(getCombobox(element)?.hasAttribute("disabled")).toBe(true);

    element.disabled = false;
    element.readOnly = true;
    await settle(element);
    element.click();
    await settle(element);
    expect(element.open).toBe(true);
    getRenderedOptions(element)[1]?.click();
    expect(element.value).toBe("a");

    element.readOnly = false;
    element.loading = true;
    await settle(element);
    expect(getCombobox(element)?.getAttribute("aria-activedescendant")).toBeNull();
    expect(element.shadowRoot?.querySelector('[part="loading"]')?.textContent)
      .toContain("加载中...");
    expect(element.shadowRoot?.querySelector('[part="clear-button"]')).toBeNull();

    element.loading = false;
    await settle(element);
    expect(getCombobox(element)?.getAttribute("aria-activedescendant"))
      .not.toBeNull();
  });

  it("exposes validation semantics, slots, focus forwarding and styling parts", async () => {
    const element = await mountSelect((select) => {
      select.setAttribute("aria-label", "选择所在城市");
      select.validation = "error";
      select.helperText = "请选择正确内容";
      select.append(createOption("shanghai", "上海"));

      const prefix = document.createElement("span");
      prefix.slot = "prefix";
      prefix.textContent = "城市";
      const indicator = document.createElement("span");
      indicator.slot = "indicator";
      indicator.textContent = "↓";
      select.append(prefix, indicator);
    });

    const combobox = getCombobox(element);
    const helper = element.shadowRoot?.querySelector('[part="helper"]');
    expect(combobox?.getAttribute("aria-label")).toBe("选择所在城市");
    expect(combobox?.getAttribute("aria-invalid")).toBe("true");
    expect(combobox?.getAttribute("aria-describedby")).toBe("super-select-helper");
    expect(helper?.getAttribute("role")).toBe("alert");
    expect(helper?.getAttribute("aria-live")).toBeNull();
    expect(
      element.shadowRoot?.querySelector<HTMLElement>('[part="prefix"]')?.hidden,
    ).toBe(false);

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(combobox);
    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
