import { describe, expect, it } from "vitest";
import {
  handDrawnBorder,
  handDrawnRadius,
  paperTexture,
  sketchyShadow,
} from "./index.js";

describe("sketch utilities", () => {
  it("produces an asymmetric hand-drawn border radius", () => {
    const radius = handDrawnRadius();

    expect(radius.split("/")).toHaveLength(2);
    expect(radius).toMatch(/\d+px/);
  });

  it("keeps hand-drawn radii deterministic for the same seed", () => {
    expect(handDrawnRadius(3)).toBe(handDrawnRadius(3));
    expect(handDrawnRadius(3)).not.toBe(handDrawnRadius(4));
  });

  it("composes a border shorthand with the requested width and color", () => {
    const border = handDrawnBorder({ width: "2px", color: "#123456" });

    expect(border).toContain("2px solid #123456");
    expect(border.split("/")).toHaveLength(2);
  });

  it("respects the requested border style", () => {
    expect(handDrawnBorder({ style: "dashed" })).toContain("dashed");
  });

  it("builds a paper texture layer that stays non-interactive", () => {
    const texture = paperTexture();

    expect(texture).toContain("pointer-events: none");
    expect(texture).toContain("background-image");
  });

  it("builds an offset sketchy shadow", () => {
    expect(sketchyShadow({ color: "#abcdef" })).toContain("#abcdef");
    expect(sketchyShadow()).toContain("px");
  });
});
