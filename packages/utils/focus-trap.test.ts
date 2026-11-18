import { afterEach, describe, expect, it } from "vitest";
import { createFocusTrap } from "./index.js";

const mount = (markup: string): HTMLElement => {
  const container = document.createElement("div");
  container.innerHTML = markup;
  document.body.append(container);
  return container;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("createFocusTrap", () => {
  it("moves focus to the first focusable element on activation", () => {
    const container = mount(
      '<button id="first">first</button><button id="second">second</button>',
    );
    const trap = createFocusTrap(container);

    trap.activate();

    expect(document.activeElement?.id).toBe("first");
    trap.deactivate();
  });

  it("restores focus to the previously focused element", () => {
    const outside = document.createElement("button");
    outside.id = "outside";
    document.body.append(outside);
    outside.focus();

    const container = mount('<button id="inside">inside</button>');
    const trap = createFocusTrap(container);

    trap.activate();
    expect(document.activeElement?.id).toBe("inside");

    trap.deactivate();
    expect(document.activeElement?.id).toBe("outside");
  });

  it("wraps focus from the last element back to the first on Tab", () => {
    const container = mount(
      '<button id="first">first</button><button id="last">last</button>',
    );
    const trap = createFocusTrap(container);
    trap.activate();

    const last = container.querySelector<HTMLButtonElement>("#last");
    last?.focus();
    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);

    expect(document.activeElement?.id).toBe("first");
    expect(event.defaultPrevented).toBe(true);
    trap.deactivate();
  });

  it("wraps focus backwards from the first element to the last", () => {
    const container = mount(
      '<button id="first">first</button><button id="last">last</button>',
    );
    const trap = createFocusTrap(container);
    trap.activate();

    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);

    expect(document.activeElement?.id).toBe("last");
    expect(event.defaultPrevented).toBe(true);
    trap.deactivate();
  });

  it("skips disabled and hidden elements", () => {
    const container = mount(
      '<button id="disabled" disabled>d</button>' +
        '<button id="hidden" hidden>h</button>' +
        '<button id="visible">v</button>',
    );
    const trap = createFocusTrap(container);

    trap.activate();

    expect(document.activeElement?.id).toBe("visible");
    trap.deactivate();
  });

  it("reports its active state and tolerates repeated activation", () => {
    const container = mount('<button id="only">only</button>');
    const trap = createFocusTrap(container);

    expect(trap.isActive()).toBe(false);
    trap.activate();
    trap.activate();
    expect(trap.isActive()).toBe(true);

    trap.deactivate();
    expect(trap.isActive()).toBe(false);
  });
});
