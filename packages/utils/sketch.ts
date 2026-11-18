const RADIUS_SETS = [
  [8, 11, 7, 10, 9, 7, 10, 8],
  [10, 7, 11, 8, 8, 11, 7, 10],
  [6, 9, 5, 8, 7, 5, 8, 6],
  [12, 9, 13, 10, 10, 13, 9, 12],
  [7, 10, 6, 9, 8, 6, 9, 7],
] as const;

export interface HandDrawnRadiusOptions {
  /** Uniform base size in pixels before the hand-drawn wobble is applied. */
  size?: number;
}

/**
 * Returns a CSS `border-radius` value whose corners deliberately disagree,
 * which is what gives the components their hand-drawn look.
 */
export function handDrawnRadius(seed = 0, options: HandDrawnRadiusOptions = {}): string {
  const scale = options.size ? options.size / 10 : 1;
  const set = RADIUS_SETS[Math.abs(Math.trunc(seed)) % RADIUS_SETS.length] ?? RADIUS_SETS[0];
  const [topLeft, topRight, bottomRight, bottomLeft, vTopLeft, vTopRight, vBottomRight, vBottomLeft] = set;
  const px = (value: number) => `${Math.max(1, Math.round(value * scale))}px`;

  return [
    `${px(topLeft)} ${px(topRight)} ${px(bottomRight)} ${px(bottomLeft)}`,
    `${px(vTopLeft)} ${px(vTopRight)} ${px(vBottomRight)} ${px(vBottomLeft)}`,
  ].join(" / ");
}

export interface HandDrawnBorderOptions {
  width?: string;
  style?: string;
  color?: string;
  seed?: number;
  radiusSize?: number;
}

/**
 * Composes a `border` shorthand plus matching `border-radius` so every
 * component draws its outline from the same hand-drawn vocabulary.
 */
export function handDrawnBorder(options: HandDrawnBorderOptions = {}): string {
  const { width = "2px", style = "solid", color = "currentColor", seed = 0, radiusSize } = options;

  return `${width} ${style} ${color}; border-radius: ${handDrawnRadius(seed, { size: radiusSize })}`;
}

export interface PaperTextureOptions {
  color?: string;
  opacity?: number;
  size?: string;
}

/**
 * Builds a decorative paper-grain layer. It is always `pointer-events: none`
 * so it can be layered over interactive content without stealing input.
 */
export function paperTexture(options: PaperTextureOptions = {}): string {
  const { color = "rgb(120 113 100 / 6%)", opacity = 1, size = "6px 6px" } = options;

  return [
    "pointer-events: none",
    `opacity: ${opacity}`,
    `background-size: ${size}`,
    `background-image: radial-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 1px, transparent 1px)`,
    "background-position: 0 0, 3px 3px",
  ].join("; ");
}

export interface SketchyShadowOptions {
  color?: string;
  offsetX?: number;
  offsetY?: number;
  blur?: number;
}

/**
 * Builds the double-layer offset shadow used by hand-drawn surfaces.
 */
export function sketchyShadow(options: SketchyShadowOptions = {}): string {
  const { color = "rgb(23 78 166 / 28%)", offsetX = 2, offsetY = 3, blur = 0 } = options;

  return `inset 0 0 0 1px rgb(255 255 255 / 24%), ${offsetX}px ${offsetY}px ${blur}px -1px ${color}`;
}
