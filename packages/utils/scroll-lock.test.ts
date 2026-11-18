import { afterEach, describe, expect, it } from "vitest";
import { lockScroll } from "./index.js";

afterEach(() => {
  document.body.removeAttribute("style");
  document.body.removeAttribute("data-super-scroll-lock");
  document.documentElement.removeAttribute("style");
  document.documentElement.removeAttribute("data-super-scroll-lock");
});

describe("lockScroll", () => {
  it("locks page scrolling while active", () => {
    const unlock = lockScroll();

    expect(document.body.style.overflow).toBe("hidden");
    unlock();
  });

  it("restores the previous overflow when unlocked", () => {
    document.body.style.overflow = "scroll";

    const unlock = lockScroll();
    expect(document.body.style.overflow).toBe("hidden");

    unlock();
    expect(document.body.style.overflow).toBe("scroll");
  });

  it("keeps the lock until the last release", () => {
    const first = lockScroll();
    const second = lockScroll();

    first();
    expect(document.body.style.overflow).toBe("hidden");

    second();
    expect(document.body.style.overflow).toBe("");
  });

  it("is idempotent when released twice", () => {
    const unlock = lockScroll();

    unlock();
    unlock();

    expect(document.body.style.overflow).toBe("");
    expect(document.body.hasAttribute("data-super-scroll-lock")).toBe(false);
  });
});
