import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type PickerHost = HTMLElement & {
  value: string | string[];
  open: boolean;
  updateComplete: Promise<boolean>;
};

async function open(page: Page, tag: string): Promise<void> {
  await page.goto(`/contract.html?tag=${encodeURIComponent(tag)}`);
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
}

async function openPicker(page: Page, tag: string): Promise<void> {
  await page.evaluate(async (tagName) => {
    const host = document.querySelector<PickerHost>(tagName);
    if (!host) {
      throw new Error(`${tagName} is not mounted`);
    }
    const trigger = host.shadowRoot?.querySelector<HTMLButtonElement>(
      ".trigger",
    );
    if (!trigger) {
      throw new Error(`${tagName} trigger is missing`);
    }
    trigger.click();
    await host.updateComplete;
  }, tag);
}

async function commitValue(
  page: Page,
  tag: string,
  properties: Record<string, unknown>,
): Promise<void> {
  await page.evaluate(
    async ({ tagName, nextProperties }) => {
      const host = document.querySelector<PickerHost>(tagName);
      if (!host) {
        throw new Error(`${tagName} is not mounted`);
      }
      Object.assign(host, nextProperties);
      await host.updateComplete;
    },
    { tagName: tag, nextProperties: properties },
  );
}

async function clickCell(
  page: Page,
  tag: string,
  selector: string,
): Promise<void> {
  await page.evaluate(
    async ({ tagName, cellSelector }) => {
      const host = document.querySelector<PickerHost>(tagName);
      if (!host) {
        throw new Error(`${tagName} is not mounted`);
      }
      const cell =
        host.shadowRoot?.querySelector<HTMLButtonElement>(cellSelector);
      if (!cell) {
        throw new Error(`${cellSelector} is missing`);
      }
      cell.click();
      await host.updateComplete;
    },
    { tagName: tag, cellSelector: selector },
  );
}

async function resetEvents(page: Page): Promise<void> {
  await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());
}

async function readInteraction(
  page: Page,
  tag: string,
  eventName: string,
): Promise<{
  value: string | string[];
  open: boolean;
  eventDetails: unknown[];
  errors: string[];
}> {
  return page.evaluate(
    ({ tagName, recordedEvent }) => {
      const host = document.querySelector<PickerHost>(tagName);
      if (!host) {
        throw new Error(`${tagName} is not mounted`);
      }
      const api = window.__SUPER_CONTRACT__;
      if (!api) {
        throw new Error("Contract debug API is missing");
      }
      return {
        value: host.value,
        open: host.open,
        eventDetails: api.events
          .filter((event) => event.name === recordedEvent)
          .map((event) => event.detail),
        errors: api.errors,
      };
    },
    { tagName: tag, recordedEvent: eventName },
  );
}

async function readValueAfterFrame(
  page: Page,
  tag: string,
): Promise<string | string[]> {
  return page.evaluate(async (tagName) => {
    const host = document.querySelector<PickerHost>(tagName);
    if (!host) {
      throw new Error(`${tagName} is not mounted`);
    }
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve());
    });
    await host.updateComplete;
    return host.value;
  }, tag);
}

test.describe("controlled picker values", () => {
  test.beforeEach(() => {
    const { browser, framework } = test.info().project.metadata;
    test.skip(
      browser !== "chromium" ||
        (framework !== "react" && framework !== "vue"),
      "Controlled picker rendering is covered in the Vue and React Chromium projects",
    );
  });

  test("@controlled date picker rolls back a rejected date selection", async ({ page }) => {
    await open(page, "super-date-picker");
    await commitValue(page, "super-date-picker", { value: "2026-11-19" });
    await openPicker(page, "super-date-picker");
    await resetEvents(page);

    await clickCell(page, "super-date-picker", '.cell[data-key="2026-11-20"]');
    const interaction = await readInteraction(
      page,
      "super-date-picker",
      "super-date-picker-change",
    );

    expect(interaction.open).toBe(false);
    expect(interaction.eventDetails).toHaveLength(1);
    expect(interaction.eventDetails[0]).toMatchObject({
      value: "2026-11-20",
    });
    expect(interaction.errors).toEqual([]);
    expect(await readValueAfterFrame(page, "super-date-picker")).toBe(
      "2026-11-19",
    );
  });

  test("@controlled date picker rolls back a rejected range selection", async ({ page }) => {
    await open(page, "super-date-picker");
    await commitValue(page, "super-date-picker", {
      mode: "range",
      value: ["2026-11-10", "2026-11-12"],
    });
    await openPicker(page, "super-date-picker");
    await resetEvents(page);

    await clickCell(page, "super-date-picker", '.cell[data-key="2026-11-14"]');
    await clickCell(page, "super-date-picker", '.cell[data-key="2026-11-16"]');
    const interaction = await readInteraction(
      page,
      "super-date-picker",
      "super-date-picker-change",
    );

    expect(interaction.open).toBe(false);
    expect(interaction.eventDetails).toHaveLength(1);
    expect(interaction.eventDetails[0]).toMatchObject({
      value: ["2026-11-14", "2026-11-16"],
    });
    expect(interaction.errors).toEqual([]);
    expect(await readValueAfterFrame(page, "super-date-picker")).toEqual([
      "2026-11-10",
      "2026-11-12",
    ]);
  });

  test("@controlled time picker rolls back a rejected time selection", async ({ page }) => {
    await open(page, "super-time-picker");
    await commitValue(page, "super-time-picker", { value: "09:30" });
    await openPicker(page, "super-time-picker");
    await resetEvents(page);

    await clickCell(
      page,
      "super-time-picker",
      '.group[data-group="0"] .cell[data-unit="hour"][data-value="10"]',
    );
    const interaction = await readInteraction(
      page,
      "super-time-picker",
      "super-time-picker-change",
    );

    expect(interaction.eventDetails).toHaveLength(1);
    expect(interaction.eventDetails[0]).toMatchObject({
      value: "10:30",
    });
    expect(interaction.errors).toEqual([]);
    expect(await readValueAfterFrame(page, "super-time-picker")).toBe(
      "09:30",
    );
  });
});
