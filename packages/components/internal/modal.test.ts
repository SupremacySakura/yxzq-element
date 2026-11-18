import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ComposedFocusScope,
  booleanAttribute,
  dispatchModalClose,
  trueBooleanAttribute,
} from "./modal.js";

afterEach(() => {
  document.body.replaceChildren();
});

describe("modal internals", () => {
  it("parses optional and default-true boolean attributes", () => {
    expect(booleanAttribute.fromAttribute(null)).toBe(false);
    expect(booleanAttribute.fromAttribute("")).toBe(true);
    expect(booleanAttribute.fromAttribute("false")).toBe(false);
    expect(booleanAttribute.toAttribute(true)).toBe("");
    expect(booleanAttribute.toAttribute(false)).toBeNull();

    expect(trueBooleanAttribute.fromAttribute(null)).toBe(true);
    expect(trueBooleanAttribute.fromAttribute("")).toBe(true);
    expect(trueBooleanAttribute.fromAttribute("false")).toBe(false);
    expect(trueBooleanAttribute.toAttribute(true)).toBe("");
    expect(trueBooleanAttribute.toAttribute(false)).toBeNull();
  });

  it("runs the close sequence in before-close, confirm, commit, close order", () => {
    const host = document.createElement("div");
    document.body.append(host);
    const order: string[] = [];

    for (const name of [
      "super-modal-before-close",
      "super-modal-confirm",
      "super-modal-cancel",
      "super-modal-close",
    ]) {
      host.addEventListener(name, (event) => {
        order.push(`${name}:${(event as CustomEvent).detail.reason}`);
      });
    }

    const close = vi.fn(() => order.push("commit"));
    const result = dispatchModalClose({
      host,
      eventPrefix: "super-modal",
      reason: "confirm",
      close,
    });

    expect(result).toBe(true);
    expect(close).toHaveBeenCalledTimes(1);
    expect(order).toEqual([
      "super-modal-before-close:confirm",
      "super-modal-confirm:confirm",
      "commit",
      "super-modal-close:confirm",
    ]);
  });

  it("emits cancel before committing and closing", () => {
    const host = document.createElement("div");
    document.body.append(host);
    const order: string[] = [];
    host.addEventListener("super-modal-before-close", () =>
      order.push("before-close"),
    );
    host.addEventListener("super-modal-cancel", () => order.push("cancel"));
    host.addEventListener("super-modal-close", () => order.push("close"));

    dispatchModalClose({
      host,
      eventPrefix: "super-modal",
      reason: "cancel",
      close: () => order.push("commit"),
    });

    expect(order).toEqual(["before-close", "cancel", "commit", "close"]);
  });

  it("does not commit or close when before-close is prevented", () => {
    const host = document.createElement("div");
    document.body.append(host);
    const close = vi.fn();
    const onClose = vi.fn();
    host.addEventListener("super-modal-before-close", (event) =>
      event.preventDefault(),
    );
    host.addEventListener("super-modal-close", onClose);

    const result = dispatchModalClose({
      host,
      eventPrefix: "super-modal",
      reason: "escape",
      close,
    });

    expect(result).toBe(false);
    expect(close).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("queries both trees without duplicates and follows shadow roots", () => {
    const host = document.createElement("div");
    const panel = document.createElement("div");
    const panelButton = document.createElement("button");
    const hostButton = document.createElement("button");
    panel.append(panelButton);
    host.append(panel, hostButton);
    document.body.append(host);

    const scope = new ComposedFocusScope(host, panel);
    expect(scope.querySelectorAll("button")).toEqual([panelButton, hostButton]);
    expect(scope.contains(panelButton)).toBe(true);
    expect(scope.contains(hostButton)).toBe(true);
    expect(scope.contains(document.body)).toBe(false);
    expect(scope.contains(null)).toBe(false);

    const nestedHost = document.createElement("div");
    const shadowRoot = nestedHost.attachShadow({ mode: "open" });
    const shadowButton = document.createElement("button");
    shadowRoot.append(shadowButton);
    panel.append(nestedHost);

    expect(scope.contains(shadowButton)).toBe(true);
  });
});
