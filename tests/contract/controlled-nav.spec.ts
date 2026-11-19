import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import type { ContractDebugApi } from "./types";

type ControlledNavProperty = "active" | "page" | "selectedKeys";
type NavValue = string | number | string[];
type InteractionKind =
  | "tabs"
  | "steps"
  | "menu"
  | "pagination"
  | "table-selection";

interface ControlledNavCase {
  tag: `super-${string}`;
  property: ControlledNavProperty;
  eventName: `super-${string}`;
  detailProperty: string;
  interaction: InteractionKind;
  setup?: Record<string, unknown>;
  initial: NavValue;
  rejected: NavValue;
}

const CONTROLLED_NAV_CASES: ControlledNavCase[] = [
  {
    tag: "super-tabs",
    property: "active",
    eventName: "super-tabs-change",
    detailProperty: "active",
    interaction: "tabs",
    initial: "one",
    rejected: "two",
  },
  {
    tag: "super-steps",
    property: "active",
    eventName: "super-steps-change",
    detailProperty: "active",
    interaction: "steps",
    setup: { clickable: true },
    initial: 1,
    rejected: 2,
  },
  {
    tag: "super-menu",
    property: "active",
    eventName: "super-menu-select",
    detailProperty: "key",
    interaction: "menu",
    initial: "overview",
    rejected: "settings",
  },
  {
    tag: "super-pagination",
    property: "page",
    eventName: "super-pagination-change",
    detailProperty: "page",
    interaction: "pagination",
    initial: 2,
    rejected: 3,
  },
  {
    tag: "super-table",
    property: "selectedKeys",
    eventName: "super-table-select",
    detailProperty: "selectedKeys",
    interaction: "table-selection",
    setup: { selectable: true },
    initial: ["1"],
    rejected: ["1", "2"],
  },
];

async function openContract(page: Page, tag: string): Promise<void> {
  await page.goto(`/contract.html?tag=${encodeURIComponent(tag)}`);
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
}

test.describe("controlled navigation values", () => {
  test.beforeEach(() => {
    const { browser, framework } = test.info().project.metadata;
    test.skip(
      browser !== "chromium" ||
        (framework !== "react" && framework !== "vue"),
      "Controlled navigation is covered in the Vue and React Chromium projects",
    );
  });

  for (const controlledCase of CONTROLLED_NAV_CASES) {
    test(`@controlled ${controlledCase.tag} restores a rejected ${controlledCase.property} change`, async ({
      page,
    }) => {
      const {
        tag,
        property,
        eventName,
        detailProperty,
        interaction,
        setup,
        initial,
        rejected,
      } = controlledCase;

      await openContract(page, tag);
      await page.evaluate(
        async ({ tagName, setupProperties, propertyName, initialValue }) => {
          type ControllableHost = HTMLElement &
            Record<string, unknown> & {
              updateComplete: Promise<boolean>;
            };

          const host = document.querySelector<ControllableHost>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }
          Object.assign(host, setupProperties);
          host[propertyName] = initialValue;
          await host.updateComplete;
        },
        {
          tagName: tag,
          setupProperties: setup ?? {},
          propertyName: property,
          initialValue: initial,
        },
      );
      await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());

      const result = await page.evaluate(
        async ({ tagName, interactionKind, propertyName, event }) => {
          type ControllableHost = HTMLElement &
            Record<string, unknown> & {
              updateComplete: Promise<boolean>;
            };

          const host = document.querySelector<ControllableHost>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }

          const clickRequired = (
            selector: string,
            label: string,
            index = 0,
          ): void => {
            const targets =
              host.shadowRoot?.querySelectorAll<HTMLElement>(selector);
            const target = targets?.[index];
            if (!target) {
              throw new Error(`${tagName} ${label} is missing`);
            }
            target.click();
          };

          if (interactionKind === "tabs") {
            clickRequired('[data-tab-key="two"]', "second tab");
          } else if (interactionKind === "steps") {
            clickRequired('button[data-step-index="2"]', "third step");
          } else if (interactionKind === "menu") {
            clickRequired('[data-menu-key="settings"]', "settings item");
          } else if (interactionKind === "pagination") {
            clickRequired('[data-page="3"]', "page 3 button");
          } else {
            clickRequired(
              'tbody input[type="checkbox"]',
              "second row checkbox",
              1,
            );
          }

          const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
          const recorded = api.events.find((entry) => entry.name === event);
          const immediate = host[propertyName];
          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
          });
          await host.updateComplete;

          return {
            immediate,
            afterFrame: host[propertyName],
            fired: Boolean(recorded),
            detail: recorded?.detail as Record<string, unknown> | undefined,
            errors: api.errors,
          };
        },
        {
          tagName: tag,
          interactionKind: interaction,
          propertyName: property,
          event: eventName,
        },
      );

      expect(result.immediate).toEqual(rejected);
      expect(result.afterFrame).toEqual(initial);
      expect(result.fired).toBe(true);
      expect(result.detail?.[detailProperty]).toEqual(rejected);
      expect(result.errors).toEqual([]);
    });
  }

  test("@controlled keeps an attribute-initialized tabs element uncontrolled", async ({
    page,
  }) => {
    await openContract(page, "super-tabs");

    const result = await page.evaluate(async () => {
      type TabsHost = HTMLElement & {
        active: string;
        items: Array<{ key: string; label: string }>;
        updateComplete: Promise<boolean>;
      };

      const host = document.createElement("super-tabs") as TabsHost;
      host.setAttribute("active", "one");
      host.items = [
        { key: "one", label: "一" },
        { key: "two", label: "二" },
      ];
      document.body.append(host);
      await customElements.whenDefined(host.localName);
      await host.updateComplete;

      let fired = 0;
      host.addEventListener("super-tabs-change", () => {
        fired += 1;
      });
      host.shadowRoot
        ?.querySelector<HTMLButtonElement>('[data-tab-key="two"]')
        ?.click();

      const immediate = host.active;
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      await host.updateComplete;

      return {
        immediate,
        afterFrame: host.active,
        fired,
      };
    });

    expect(result.immediate).toBe("two");
    expect(result.afterFrame).toBe("two");
    expect(result.fired).toBe(1);
  });
});
