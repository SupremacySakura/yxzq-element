let lockCount = 0;
let previousBodyOverflow = "";
let previousHtmlOverflow = "";

/**
 * Locks page scrolling and returns a release function. Locks are counted so
 * stacked overlays keep the page frozen until the outermost one closes.
 */
export function lockScroll(): () => void {
  const body = typeof document === "undefined" ? undefined : document.body;

  if (!body) {
    return () => {};
  }

  if (lockCount === 0) {
    previousBodyOverflow = body.style.overflow;
    previousHtmlOverflow = document.documentElement.style.overflow;
    body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    body.setAttribute("data-super-scroll-lock", "");
  }

  lockCount += 1;
  let released = false;

  return () => {
    if (released) {
      return;
    }

    released = true;
    lockCount = Math.max(0, lockCount - 1);

    if (lockCount > 0) {
      return;
    }

    body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;
    body.removeAttribute("data-super-scroll-lock");
  };
}
