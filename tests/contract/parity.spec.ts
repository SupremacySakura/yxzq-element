import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import {
  COMPONENTS,
  EVENTS,
  EVENTS_BY_TAG,
} from "./manifest";
import type {
  RecordedContractEvent,
} from "./types";

async function openContract(
  page: Page,
  tag: string,
): Promise<{ errors: string[] }> {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto(`/contract.html?tag=${encodeURIComponent(tag)}`);
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);

  return { errors: pageErrors };
}

test.describe("framework contract", () => {
  for (const component of COMPONENTS) {
    test(`mounts ${component.tag}`, async ({ page }) => {
      const { errors } = await openContract(page, component.tag);

      const result = await page.evaluate((tag) => {
        const element = document.querySelector<HTMLElement>(tag);
        const api = window.__SUPER_CONTRACT__;
        return {
          defined: Boolean(customElements.get(tag)),
          connected: element?.isConnected ?? false,
          hasShadowRoot: Boolean(element?.shadowRoot),
          apiErrors: api?.errors ?? [],
        };
      }, component.tag);

      expect(errors).toEqual([]);
      expect(result.defined).toBe(true);
      expect(result.connected).toBe(true);
      expect(result.hasShadowRoot).toBe(true);
      expect(result.apiErrors).toEqual([]);
    });

    const componentEvents = EVENTS_BY_TAG.get(component.tag) ?? [];
    if (componentEvents.length > 0) {
      test(`binds every ${component.tag} event`, async ({ page }) => {
        await openContract(page, component.tag);
        const expectedNames = componentEvents.map((event) => event.name);

        const recorded = await page.evaluate((eventNames) => {
          const api = window.__SUPER_CONTRACT__;
          if (!api) {
            throw new Error("Contract debug API is missing");
          }

          api.resetEvents();
          for (const name of eventNames) {
            api.dispatch(name, { contractEvent: name, index: 17 });
          }
          return api.events;
        }, expectedNames);

        const events = recorded as RecordedContractEvent[];
        expect(events.map((event) => event.name)).toEqual(expectedNames);

        for (const event of events) {
          expect(event.detail).toEqual({
            contractEvent: event.name,
            index: 17,
          });
          expect(event.bubbles).toBe(true);
          expect(event.composed).toBe(true);
        }
      });
    }
  }

  test("exposes the complete event count", async ({ page }) => {
    await page.goto("/contract.html?tag=super-button");
    await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);

    const tag = await page.evaluate(() => {
      return window.__SUPER_CONTRACT__?.tag ?? "";
    });

    expect(tag).toBe("super-button");
    expect(EVENTS).toHaveLength(58);
    expect(new Set(EVENTS.map((event) => event.name)).size).toBe(58);
  });
});
