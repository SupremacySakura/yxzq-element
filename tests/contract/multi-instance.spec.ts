import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import { COMPONENTS, EVENTS_BY_TAG } from "./manifest";
import type { ContractDebugApi, RecordedContractEvent } from "./types";

interface DuplicateInstanceState {
  count: number;
  connected: boolean[];
  shadowRoots: boolean[];
  duplicateIds: Array<{ root: string; ids: string[] }>;
  apiErrors: string[];
}

async function openDuplicated(page: Page, tag: string): Promise<void> {
  await page.goto(
    `/contract.html?tag=${encodeURIComponent(tag)}&count=2`,
  );
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
}

async function inspectDuplicates(
  page: Page,
  tag: string,
): Promise<DuplicateInstanceState> {
  return page.evaluate(async (tagName) => {
    const instances = Array.from(
      document.querySelectorAll<HTMLElement>(tagName),
    );

    await Promise.all(
      instances.map(async (instance) => {
        await customElements.whenDefined(tagName);
        await (
          instance as HTMLElement & { updateComplete?: Promise<boolean> }
        ).updateComplete;
      }),
    );

    const roots: Array<{ label: string; root: Document | ShadowRoot }> = [
      { label: "document", root: document },
    ];
    const collectShadowRoots = (root: Document | ShadowRoot): void => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
      let current = walker.nextNode();
      while (current) {
        const element = current as HTMLElement;
        if (element.shadowRoot) {
          roots.push({
            label: `${element.localName}[${roots.length}]`,
            root: element.shadowRoot,
          });
          collectShadowRoots(element.shadowRoot);
        }
        current = walker.nextNode();
      }
    };
    collectShadowRoots(document);

    const duplicateIds = roots.flatMap(({ label, root }) => {
      const ids = Array.from(root.querySelectorAll<HTMLElement>("[id]")).map(
        (element) => element.id,
      );
      const seen = new Set<string>();
      const duplicates = new Set<string>();
      for (const id of ids) {
        if (seen.has(id)) {
          duplicates.add(id);
        }
        seen.add(id);
      }
      return duplicates.size > 0
        ? [{ root: label, ids: [...duplicates] }]
        : [];
    });

    const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
    return {
      count: instances.length,
      connected: instances.map((instance) => instance.isConnected),
      shadowRoots: instances.map((instance) => Boolean(instance.shadowRoot)),
      duplicateIds,
      apiErrors: api.errors,
    };
  }, tag);
}

test.describe("duplicate component instances", () => {
  test.beforeEach(() => {
    test.skip(
      test.info().project.metadata.browser !== "chromium",
      "Duplicate-instance coverage runs in the Chromium contract projects",
    );
  });

  test("mounts two isolated instances of every component", async ({ page }) => {
    test.setTimeout(120_000);
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    for (const component of COMPONENTS) {
      await openDuplicated(page, component.tag);
      const state = await inspectDuplicates(page, component.tag);

      expect(state.count, component.tag).toBe(2);
      expect(state.connected, component.tag).toEqual([true, true]);
      expect(state.shadowRoots, component.tag).toEqual([true, true]);
      expect(state.duplicateIds, component.tag).toEqual([]);
      expect(state.apiErrors, component.tag).toEqual([]);

      const eventName = EVENTS_BY_TAG.get(component.tag)?.[0]?.name;
      if (eventName) {
        const recorded = await page.evaluate(
          ({ tagName, name }) => {
            const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
            const instances = document.querySelectorAll<HTMLElement>(tagName);
            const second = instances[1];
            if (!second) {
              throw new Error(`${tagName} second instance is missing`);
            }
            api.resetEvents();
            second.dispatchEvent(
              new CustomEvent(name, {
                detail: { duplicate: 2 },
                bubbles: true,
                composed: true,
              }),
            );
            return api.events;
          },
          { tagName: component.tag, name: eventName },
        );
        expect(
          (recorded as RecordedContractEvent[]).at(-1),
          component.tag,
        ).toMatchObject({
          name: eventName,
          detail: { duplicate: 2 },
          bubbles: true,
          composed: true,
        });
      }
    }

    expect(pageErrors).toEqual([]);
  });

  test("breadcrumb targets keep a 24px minimum hit area", async ({ page }) => {
    test.skip(
      test.info().project.metadata.framework !== "html",
      "The layout assertion runs on the canonical HTML host",
    );

    await openDuplicated(page, "super-breadcrumb");
    const heights = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLElement>("super-breadcrumb"))
        .flatMap((host) =>
          Array.from(
            host.shadowRoot?.querySelectorAll<HTMLElement>(
              '[part="link"], [part="current"], [part="label"]',
            ) ?? [],
          ),
        )
        .map((element) => element.getBoundingClientRect().height),
    );

    expect(heights.length).toBeGreaterThan(0);
    expect(Math.min(...heights)).toBeGreaterThanOrEqual(24);
  });

  test("duplicate instances pass axe WCAG 2.2 AA", async ({ page }) => {
    test.skip(
      test.info().project.metadata.framework !== "html",
      "Axe scans the canonical HTML host once",
    );
    test.setTimeout(180_000);
    const violations: Array<{
      component: string;
      id: string;
      impact: string | null | undefined;
      help: string;
      targets: Array<string | string[]>;
    }> = [];

    for (const component of COMPONENTS) {
      await openDuplicated(page, component.tag);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();

      violations.push(
        ...results.violations.map((violation) => ({
          component: component.tag,
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          targets: violation.nodes.flatMap((node) => node.target),
        })),
      );
    }

    expect(violations).toEqual([]);
  });
});
