import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperCard, SUPER_CARD_TAG, SuperCard } from "./index.js";

const mountCard = async (content = "卡片正文") => {
  defineSuperCard();
  const element = document.createElement(SUPER_CARD_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperCard", () => {
  it("registers the super-card tag idempotently", () => {
    expect(defineSuperCard()).toBe(SuperCard);
    expect(defineSuperCard()).toBe(SuperCard);
    expect(customElements.get(SUPER_CARD_TAG)).toBe(SuperCard);
  });

  it("renders default and named slot content with exposed parts", async () => {
    const element = await mountCard();
    const header = document.createElement("span");
    header.slot = "header";
    header.textContent = "卡片标题";
    const footer = document.createElement("span");
    footer.slot = "footer";
    footer.textContent = "卡片页脚";
    const media = document.createElement("div");
    media.slot = "media";
    media.textContent = "封面";
    element.append(header, footer, media);
    await element.updateComplete;

    expect(
      element.shadowRoot
        ?.querySelector<HTMLSlotElement>("slot:not([name])")
        ?.assignedNodes()
        .map((node) => node.textContent)
        .join(""),
    ).toBe("卡片正文");
    expect(
      element.shadowRoot
        ?.querySelector<HTMLSlotElement>('slot[name="header"]')
        ?.assignedElements(),
    ).toEqual([header]);
    expect(
      element.shadowRoot
        ?.querySelector<HTMLSlotElement>('slot[name="footer"]')
        ?.assignedElements(),
    ).toEqual([footer]);
    expect(
      element.shadowRoot
        ?.querySelector<HTMLSlotElement>('slot[name="media"]')
        ?.assignedElements(),
    ).toEqual([media]);

    for (const part of ["surface", "media", "header", "body", "footer"]) {
      expect(element.shadowRoot?.querySelector(`[part~="${part}"]`))
        .not.toBeNull();
    }
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountCard();

    expect(element.variant).toBe("default");
    expect(element.size).toBe("medium");
    expect(element.hoverable).toBe(false);
    expect(element.clickable).toBe(false);

    element.variant = "filled";
    element.size = "large";
    element.hoverable = true;
    await element.updateComplete;

    expect(element.getAttribute("variant")).toBe("filled");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("hoverable")).toBe(true);
  });

  it("hides empty named sections and reveals populated ones", async () => {
    const element = await mountCard();
    const header = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="header"]',
    );
    const footer = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="footer"]',
    );

    expect(header?.hidden).toBe(true);
    expect(footer?.hidden).toBe(true);

    const headerContent = document.createElement("span");
    headerContent.slot = "header";
    headerContent.textContent = "标题";
    element.append(headerContent);
    await element.updateComplete;

    expect(header?.hidden).toBe(false);
  });

  it("only exposes button semantics while clickable", async () => {
    const element = await mountCard();

    expect(element.getAttribute("role")).toBeNull();
    expect(element.getAttribute("tabindex")).toBeNull();
    expect(element.shadowRoot?.querySelector("[tabindex]")).toBeNull();

    element.clickable = true;
    element.setAttribute("aria-label", "打开详情");
    await element.updateComplete;

    expect(element.getAttribute("role")).toBe("button");
    expect(element.getAttribute("tabindex")).toBe("0");
    expect(element.getAttribute("aria-label")).toBe("打开详情");

    element.focus();
    expect(document.activeElement).toBe(element);
  });

  it("dispatches a composed click event for pointer activation", async () => {
    const element = await mountCard();
    element.clickable = true;
    await element.updateComplete;
    const onCardClick = vi.fn();
    element.addEventListener("super-card-click", onCardClick);

    element.shadowRoot
      ?.querySelector<HTMLElement>('[part="surface"]')
      ?.click();

    expect(onCardClick).toHaveBeenCalledTimes(1);
    const event = onCardClick.mock.calls[0]?.[0] as CustomEvent;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail.originalEvent).toBeInstanceOf(MouseEvent);
  });

  it("activates with Enter and Space and ignores those keys when not clickable", async () => {
    const element = await mountCard();
    const onCardClick = vi.fn();
    element.addEventListener("super-card-click", onCardClick);

    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    expect(onCardClick).not.toHaveBeenCalled();

    element.clickable = true;
    await element.updateComplete;

    const enter = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(enter);
    expect(enter.defaultPrevented).toBe(true);
    expect(onCardClick).toHaveBeenCalledTimes(1);

    element.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(onCardClick).toHaveBeenCalledTimes(2);

    element.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    expect(onCardClick).toHaveBeenCalledTimes(2);
  });
});
