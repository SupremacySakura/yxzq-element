const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]:not([contenteditable='false'])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export interface FocusTrap {
  activate: () => void;
  deactivate: () => void;
  isActive: () => boolean;
}

const isVisible = (element: HTMLElement): boolean => {
  if (element.hasAttribute("hidden")) {
    return false;
  }

  if (element.getAttribute("aria-hidden") === "true") {
    return false;
  }

  const style = typeof getComputedStyle === "undefined" ? null : getComputedStyle(element);
  if (style && (style.display === "none" || style.visibility === "hidden")) {
    return false;
  }

  for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (ancestor.hasAttribute("hidden") || ancestor.getAttribute("aria-hidden") === "true") {
      return false;
    }

    const ancestorStyle =
      typeof getComputedStyle === "undefined" ? null : getComputedStyle(ancestor);
    if (ancestorStyle && (ancestorStyle.display === "none" || ancestorStyle.visibility === "hidden")) {
      return false;
    }
  }

  return true;
};

export function getFocusableElements(container: ParentNode): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && isVisible(element),
  );
}

/**
 * Keeps Tab and Shift+Tab cycling inside the given container and restores
 * focus to whatever was focused before activation.
 */
export function createFocusTrap(
  container: HTMLElement,
  options: { initialFocus?: HTMLElement | null; returnFocus?: HTMLElement | null } = {},
): FocusTrap {
  let active = false;
  let previouslyFocused: HTMLElement | null = null;

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = getFocusableElements(container);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;
    const current = document.activeElement as HTMLElement | null;

    if (!event.shiftKey && (current === last || !container.contains(current))) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (event.shiftKey && (current === first || !container.contains(current))) {
      event.preventDefault();
      last.focus();
    }
  };

  const activate = (): void => {
    if (active) {
      return;
    }

    active = true;
    previouslyFocused = options.returnFocus ?? (document.activeElement as HTMLElement | null);
    document.addEventListener("keydown", handleKeyDown, true);

    const target = options.initialFocus ?? getFocusableElements(container)[0] ?? container;
    target.focus();
  };

  const deactivate = (): void => {
    if (!active) {
      return;
    }

    active = false;
    document.removeEventListener("keydown", handleKeyDown, true);
    previouslyFocused?.focus?.();
    previouslyFocused = null;
  };

  return { activate, deactivate, isActive: () => active };
}
