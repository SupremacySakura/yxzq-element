import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperAutocomplete,
  SUPER_AUTOCOMPLETE_TAG,
  SuperAutocomplete,
} from "./index.js";

const settle = async (element: SuperAutocomplete): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountAutocomplete = async (
  configure?: (element: SuperAutocomplete) => void,
): Promise<SuperAutocomplete> => {
  defineSuperAutocomplete();
  const element = document.createElement(SUPER_AUTOCOMPLETE_TAG);
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getInput = (element: SuperAutocomplete) =>
  element.shadowRoot?.querySelector<HTMLInputElement>('[part="input"]');

const getListbox = (element: SuperAutocomplete) =>
  element.shadowRoot?.querySelector<HTMLElement>('[part="listbox"]');

const getOptions = (element: SuperAutocomplete) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLElement>('[role="option"]') ?? [],
  );

const typeValue = async (
  element: SuperAutocomplete,
  value: string,
): Promise<void> => {
  const input = getInput(element);
  if (!input) {
    return;
  }
  input.value = value;
  input.dispatchEvent(
    new InputEvent("input", { bubbles: true, composed: true }),
  );
  await settle(element);
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperAutocomplete", () => {
  it("registers super-autocomplete idempotently and exposes stable defaults", async () => {
    expect(defineSuperAutocomplete()).toBe(SuperAutocomplete);
    expect(defineSuperAutocomplete()).toBe(SuperAutocomplete);
    expect(customElements.get(SUPER_AUTOCOMPLETE_TAG)).toBe(
      SuperAutocomplete,
    );

    const element = await mountAutocomplete();
    expect(element.value).toBe("");
    expect(element.items).toEqual([]);
    expect(element.open).toBe(false);
    expect(element.placeholder).toBe("输入以搜索");
    expect(element.disabled).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.clearable).toBe(false);
    expect(element.loading).toBe(false);
    expect(element.emptyText).toBe("没有匹配项");
    expect(element.clearLabel).toBe("清空输入");
    expect(element.loadingText).toBe("加载中...");
    expect(element.minChars).toBe(0);
  });

  it("reflects primitive properties and accepts string items", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["上海", "杭州"];
    });

    element.value = "上海";
    element.open = true;
    element.placeholder = "搜索城市";
    element.size = "small";
    element.validation = "error";
    element.clearable = true;
    element.loading = true;
    element.emptyText = "没有城市";
    element.clearLabel = "清除城市";
    element.loadingText = "正在搜索";
    element.minChars = 2;
    await settle(element);

    expect(element.getAttribute("value")).toBe("上海");
    expect(element.hasAttribute("open")).toBe(true);
    expect(element.getAttribute("placeholder")).toBe("搜索城市");
    expect(element.getAttribute("size")).toBe("small");
    expect(element.getAttribute("validation")).toBe("error");
    expect(element.hasAttribute("clearable")).toBe(true);
    expect(element.hasAttribute("loading")).toBe(true);
    expect(element.getAttribute("empty-text")).toBe("没有城市");
    expect(element.getAttribute("clear-label")).toBe("清除城市");
    expect(element.getAttribute("loading-text")).toBe("正在搜索");
    expect(element.getAttribute("min-chars")).toBe("2");

    element.disabled = true;
    await settle(element);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.hasAttribute("open")).toBe(false);
  });

  it("exposes combobox and listbox semantics and filters by label or value", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = [
        { value: "shanghai", label: "上海" },
        { value: "hangzhou", label: "杭州" },
        { value: "shenzhen", label: "深圳", disabled: true },
      ];
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-autocomplete-open-change", onOpenChange);

    await typeValue(element, "杭");

    const input = getInput(element);
    const listbox = getListbox(element);
    expect(input?.getAttribute("role")).toBe("combobox");
    expect(input?.getAttribute("aria-expanded")).toBe("true");
    expect(input?.getAttribute("aria-controls")).toBe(listbox?.id);
    expect(input?.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[0]?.id,
    );
    expect(listbox?.getAttribute("role")).toBe("listbox");
    expect(getOptions(element).map((option) => option.textContent)).toEqual([
      "杭州",
    ]);

    const event = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      open: boolean;
    }>;
    expect(event.detail).toEqual({ open: true });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);

    await typeValue(element, "shenzhen");
    expect(getOptions(element)[0]?.getAttribute("aria-disabled")).toBe("true");
  });

  it("supports a custom filter and minChars", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["apple", "apricot", "banana"];
      autocomplete.minChars = 2;
      autocomplete.filter = (item, query) =>
        item.value.startsWith(query.toLocaleLowerCase());
    });

    await typeValue(element, "a");
    expect(element.open).toBe(true);
    expect(getOptions(element)).toHaveLength(0);
    expect(
      element.shadowRoot?.querySelector('[part="empty"]')?.textContent,
    ).toContain("没有匹配项");

    await typeValue(element, "AP");
    expect(getOptions(element).map((option) => option.textContent)).toEqual([
      "apple",
      "apricot",
    ]);
  });

  it("navigates with arrows, Home and End, skipping disabled options", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = [
        { value: "a", label: "Apple" },
        { value: "b", label: "Banana", disabled: true },
        { value: "c", label: "Cherry" },
      ];
    });
    const input = getInput(element) as HTMLInputElement;

    input.dispatchEvent(new FocusEvent("focus"));
    await settle(element);
    expect(element.open).toBe(true);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[0]?.id,
    );

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[2]?.id,
    );

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[0]?.id,
    );

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[2]?.id,
    );
  });

  it("opens with ArrowDown on the first option and moves forward from it", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["Alpha", "Beta", "Gamma"];
    });
    const input = getInput(element) as HTMLInputElement;

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(element.open).toBe(true);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[0]?.id,
    );

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(input.getAttribute("aria-activedescendant")).toBe(
      getOptions(element)[1]?.id,
    );
  });

  it("selects with Enter and emits input, change and open-change events", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = [
        { value: "shanghai", label: "上海" },
        { value: "hangzhou", label: "杭州" },
      ];
    });
    const onInput = vi.fn();
    const onChange = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-autocomplete-input", onInput);
    element.addEventListener("super-autocomplete-change", onChange);
    element.addEventListener("super-autocomplete-open-change", onOpenChange);

    await typeValue(element, "杭");
    const input = getInput(element) as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.value).toBe("hangzhou");
    expect(input.value).toBe("hangzhou");
    expect(onInput).toHaveBeenCalledTimes(1);
    expect((onInput.mock.calls[0]?.[0] as CustomEvent).detail).toEqual({
      value: "杭",
    });

    const changeEvent = onChange.mock.calls[0]?.[0] as CustomEvent<{
      value: string;
    }>;
    expect(changeEvent.detail).toEqual({ value: "hangzhou" });
    expect(changeEvent.bubbles).toBe(true);
    expect(changeEvent.composed).toBe(true);
    expect(element.open).toBe(false);
    expect(document.activeElement).toBe(element);
    expect(element.shadowRoot?.activeElement).toBe(input);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toEqual({ open: false });
  });

  it("closes on Escape, respects disabled, and supports mouse selection", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["Alpha", "Beta"];
    });

    await typeValue(element, "a");
    const input = getInput(element) as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(element.open).toBe(false);

    getInput(element)?.dispatchEvent(new FocusEvent("focus"));
    await settle(element);
    getOptions(element)[1]?.click();
    await settle(element);
    expect(element.value).toBe("Beta");

    element.disabled = true;
    await settle(element);
    getInput(element)?.dispatchEvent(new FocusEvent("focus"));
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("clears the value with the clear action", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["Alpha"];
      autocomplete.value = "Alpha";
      autocomplete.clearable = true;
    });
    const onClear = vi.fn();
    element.addEventListener("super-autocomplete-clear", onClear);

    const clear = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="clear"]',
    );
    expect(clear?.hidden).toBe(false);
    clear?.click();
    await settle(element);

    expect(element.value).toBe("");
    const event = onClear.mock.calls[0]?.[0] as CustomEvent<{
      previousValue: string;
    }>;
    expect(event.detail).toEqual({ previousValue: "Alpha" });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(element.shadowRoot?.activeElement).toBe(getInput(element));
  });

  it("renders empty and loading states with localized labels", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.emptyText = "没有结果";
      autocomplete.loadingText = "正在加载";
      autocomplete.loading = true;
    });

    getInput(element)?.dispatchEvent(new FocusEvent("focus"));
    await settle(element);
    expect(
      element.shadowRoot?.querySelector('[part="empty"]')?.textContent,
    ).toContain("正在加载");
    expect(getInput(element)?.getAttribute("aria-busy")).toBe("true");
    expect(getInput(element)?.hasAttribute("aria-activedescendant")).toBe(false);

    element.loading = false;
    await settle(element);
    expect(
      element.shadowRoot?.querySelector('[part="empty"]')?.textContent,
    ).toContain("没有结果");
    expect(getOptions(element)).toHaveLength(0);
  });

  it("closes on an outside pointerdown and exposes all public parts", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["Alpha"];
    });

    getInput(element)?.dispatchEvent(new FocusEvent("focus"));
    await settle(element);
    expect(getListbox(element)).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="field"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="input"]')).not.toBeNull();
    expect(getOptions(element)[0]?.getAttribute("part")).toBe("option");

    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);
    expect(element.open).toBe(false);
    expect(getListbox(element)).toBeNull();
  });

  it("does not emit user events for programmatic value or open changes", async () => {
    const element = await mountAutocomplete((autocomplete) => {
      autocomplete.items = ["Alpha"];
    });
    const onInput = vi.fn();
    const onChange = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-autocomplete-input", onInput);
    element.addEventListener("super-autocomplete-change", onChange);
    element.addEventListener("super-autocomplete-open-change", onOpenChange);

    element.value = "Alpha";
    element.open = true;
    await settle(element);

    expect(getListbox(element)).not.toBeNull();
    expect(onInput).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
    expect(onOpenChange).not.toHaveBeenCalled();
  });
});
