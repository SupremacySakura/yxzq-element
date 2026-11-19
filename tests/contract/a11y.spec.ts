import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { COMPONENTS } from "./manifest";

test.describe("accessibility", () => {
  test.beforeEach(() => {
    test.skip(
      test.info().project.metadata.framework !== "html" ||
        test.info().project.metadata.browser !== "chromium",
      "Axe runs on the canonical HTML host in Chromium",
    );
  });

  for (const component of COMPONENTS) {
    test(`${component.tag} has no WCAG 2.2 A/AA violations`, async ({
      page,
    }) => {
      await page.goto(`/contract.html?tag=${encodeURIComponent(component.tag)}`);
      await page.waitForFunction(
        () => window.__SUPER_CONTRACT__?.ready === true,
      );

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();

      expect(
        results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          targets: violation.nodes.flatMap((node) => node.target),
        })),
      ).toEqual([]);
    });
  }
});
