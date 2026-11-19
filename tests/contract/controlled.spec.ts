import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import type { ContractDebugApi } from "./types";

type ControlledProperty = "checked" | "value";
type InteractionKind = "click" | "slider-keyboard" | "rate-keyboard";

interface ControlledCase {
  tag: `super-${string}`;
  property: ControlledProperty;
  eventName: `super-${string}`;
  interaction: InteractionKind;
  initial: boolean | number;
  rejected: boolean | number;
  accepted: boolean | number;
  uncontrolled: boolean | number;
}

const CONTROLLED_CASES: ControlledCase[] = [
  {
    tag: "super-checkbox",
    property: "checked",
    eventName: "super-checkbox-change",
    interaction: "click",
    initial: true,
    rejected: false,
    accepted: false,
    uncontrolled: true,
  },
  {
    tag: "super-switch",
    property: "checked",
    eventName: "super-switch-change",
    interaction: "click",
    initial: true,
    rejected: false,
    accepted: false,
    uncontrolled: true,
  },
  {
    tag: "super-slider",
    property: "value",
    eventName: "super-slider-change",
    interaction: "slider-keyboard",
    initial: 40,
    rejected: 41,
    accepted: 60,
    uncontrolled: 1,
  },
  {
    tag: "super-rate",
    property: "value",
    eventName: "super-rate-change",
    interaction: "rate-keyboard",
    initial: 3,
    rejected: 5,
    accepted: 2,
    uncontrolled: 5,
  },
  {
    tag: "super-radio",
    property: "checked",
    eventName: "super-radio-change",
    interaction: "click",
    initial: false,
    rejected: true,
    accepted: true,
    uncontrolled: true,
  },
];

async function open(page: Page, tag: string): Promise<void> {
  await page.goto(`/contract.html?tag=${encodeURIComponent(tag)}`);
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
}

test.describe("controlled selector values", () => {
  test.beforeEach(() => {
    const { browser, framework } = test.info().project.metadata;
    test.skip(
      browser !== "chromium" ||
        (framework !== "react" && framework !== "vue"),
      "Controlled rendering is covered in the Vue and React Chromium projects",
    );
  });

  for (const controlledCase of CONTROLLED_CASES) {
    test(`@controlled ${controlledCase.tag} rolls back rejected changes and accepts external writes`, async ({
      page,
    }) => {
      const {
        tag,
        property,
        eventName,
        interaction,
        initial,
        rejected,
        accepted,
      } = controlledCase;

      await open(page, tag);
      await page.evaluate(
        async ({ tagName, propertyName, initialValue }) => {
          const host = document.querySelector<HTMLElement>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }
          (host as unknown as Record<
            ControlledProperty,
            boolean | number
          >)[propertyName] = initialValue;
          await (host as HTMLElement & {
            updateComplete: Promise<boolean>;
          }).updateComplete;
        },
        {
          tagName: tag,
          propertyName: property,
          initialValue: initial,
        },
      );
      await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());

      const rejectedInteraction = await page.evaluate(
        ({ tagName, interactionKind, propertyName, event }) => {
          type ControllableHost = HTMLElement &
            Record<ControlledProperty, boolean | number>;

          const host = document.querySelector<ControllableHost>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }

          if (interactionKind === "click") {
            host.click();
          } else if (interactionKind === "slider-keyboard") {
            const input = host.shadowRoot?.querySelector<HTMLInputElement>(
              'input[type="range"]',
            );
            if (!input) {
              throw new Error(`${tagName} range input is missing`);
            }
            input.focus();
            input.dispatchEvent(new KeyboardEvent("keydown", {
              key: "ArrowRight",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          } else {
            const slider = host.shadowRoot?.querySelector<HTMLElement>(
              '[role="slider"]',
            );
            if (!slider) {
              throw new Error(`${tagName} slider is missing`);
            }
            slider.focus();
            slider.dispatchEvent(new KeyboardEvent("keydown", {
              key: "End",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          }

          const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
          const detail = api.events.find((recorded) => recorded.name === event)
            ?.detail as Record<string, unknown> | undefined;
          return {
            immediate: host[propertyName],
            detailValue: detail?.[propertyName],
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

      expect(rejectedInteraction.immediate).toBe(rejected);
      expect(rejectedInteraction.detailValue).toBe(rejected);
      expect(rejectedInteraction.errors).toEqual([]);

      const restored = await page.evaluate(
        async ({ tagName, propertyName }) => {
          const host = document.querySelector<HTMLElement>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }
          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
          });
          await (host as HTMLElement & {
            updateComplete: Promise<boolean>;
          }).updateComplete;
          return (host as unknown as Record<
            ControlledProperty,
            boolean | number
          >)[propertyName];
        },
        { tagName: tag, propertyName: property },
      );
      expect(restored).toBe(initial);

      await page.evaluate(
        ({ tagName, event, propertyName, acceptedValue }) => {
          const host = document.querySelector<HTMLElement>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }
          host.addEventListener(event, () => {
            (host as unknown as Record<
              ControlledProperty,
              boolean | number
            >)[propertyName] = acceptedValue;
          }, { once: true });
        },
        {
          tagName: tag,
          event: eventName,
          propertyName: property,
          acceptedValue: accepted,
        },
      );
      await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());

      const acceptedInteraction = await page.evaluate(
        async ({ tagName, interactionKind, propertyName, event }) => {
          type ControllableHost = HTMLElement &
            Record<ControlledProperty, boolean | number>;

          const host = document.querySelector<ControllableHost>(tagName);
          if (!host) {
            throw new Error(`${tagName} is not mounted`);
          }

          if (interactionKind === "click") {
            host.click();
          } else if (interactionKind === "slider-keyboard") {
            const input = host.shadowRoot?.querySelector<HTMLInputElement>(
              'input[type="range"]',
            );
            if (!input) {
              throw new Error(`${tagName} range input is missing`);
            }
            input.focus();
            input.dispatchEvent(new KeyboardEvent("keydown", {
              key: "ArrowRight",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          } else {
            const slider = host.shadowRoot?.querySelector<HTMLElement>(
              '[role="slider"]',
            );
            if (!slider) {
              throw new Error(`${tagName} slider is missing`);
            }
            slider.focus();
            slider.dispatchEvent(new KeyboardEvent("keydown", {
              key: "End",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          }

          const immediate = host[propertyName];
          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
          });
          const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
          const detail = api.events.find((recorded) => recorded.name === event)
            ?.detail as Record<string, unknown> | undefined;
          return {
            immediate,
            afterFrame: host[propertyName],
            detailValue: detail?.[propertyName],
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

      expect(acceptedInteraction.immediate).toBe(accepted);
      expect(acceptedInteraction.detailValue).toBe(rejected);
      expect(acceptedInteraction.afterFrame).toBe(accepted);
      expect(acceptedInteraction.errors).toEqual([]);
    });

    test(`@controlled uncontrolled ${controlledCase.tag} keeps interaction state`, async ({
      page,
    }) => {
      const { tag, property, interaction, uncontrolled } = controlledCase;

      await open(page, tag);
      const result = await page.evaluate(
        async ({ tagName, interactionKind, propertyName }) => {
          type ControllableHost = HTMLElement &
            Record<ControlledProperty, boolean | number> & {
              updateComplete?: Promise<boolean>;
            };

          const host = document.createElement(tagName) as ControllableHost;
          document.body.append(host);
          await customElements.whenDefined(tagName);
          await host.updateComplete;

          if (interactionKind === "click") {
            host.click();
          } else if (interactionKind === "slider-keyboard") {
            const input = host.shadowRoot?.querySelector<HTMLInputElement>(
              'input[type="range"]',
            );
            if (!input) {
              throw new Error(`${tagName} range input is missing`);
            }
            input.focus();
            input.dispatchEvent(new KeyboardEvent("keydown", {
              key: "ArrowRight",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          } else {
            const slider = host.shadowRoot?.querySelector<HTMLElement>(
              '[role="slider"]',
            );
            if (!slider) {
              throw new Error(`${tagName} slider is missing`);
            }
            slider.focus();
            slider.dispatchEvent(new KeyboardEvent("keydown", {
              key: "End",
              bubbles: true,
              composed: true,
              cancelable: true,
            }));
          }

          const immediate = host[propertyName];
          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
          });
          return {
            immediate,
            afterFrame: host[propertyName],
          };
        },
        {
          tagName: tag,
          interactionKind: interaction,
          propertyName: property,
        },
      );

      expect(result.immediate).toBe(uncontrolled);
      expect(result.afterFrame).toBe(uncontrolled);
    });
  }
});
