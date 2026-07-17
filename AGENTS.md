# Project guide for agents

## Project direction

This repository is a framework-agnostic Web Component library implemented with Lit. It is no longer a Vue component library and must not copy Element Plus APIs, implementation, documentation, or visual design.

The intended product direction is an original hand-drawn component system. The project owner defines each component's final API, interaction, and visual treatment. Do not invent new components or expand an existing component's product API unless the user explicitly asks.

## Naming invariants

- Every Custom Element tag uses the `super-` prefix and contains a hyphen, for example `super-button`.
- Element classes use the `Super` prefix, for example `SuperButton`.
- Public CSS custom properties use the `--super-` prefix.
- Library-specific custom events use the `super-` prefix. Events must normally be dispatched with `bubbles: true` and `composed: true` so that they cross Shadow DOM boundaries.
- Do not introduce `er-*`, `Er*`, `--er-*`, or Element Plus branding.
- The npm package and workspace scopes remain `yxzq-element` and `@yxzq-element/*` until the user explicitly requests a package rename.

## Architecture boundaries

- `packages/components`: LitElement implementations. It must not depend on Vue or React.
- `packages/core`: public registration and package entry points. It must not depend on Vue or React.
- `packages/utils`: framework-neutral Custom Element helpers.
- `packages/theme`: optional global theme/reset CSS. The core entry must not automatically inject global reset styles.
- `packages/hooks`: reserved for future Lit controllers/directives; do not put Vue composables here.
- `packages/play`: native HTML playground.
- `examples/react` and `examples/vue`: consumer compatibility projects. Framework dependencies are allowed only here and in VitePress internals.
- `packages/docs`: VitePress documentation. VitePress uses Vue internally, but Vue is not a runtime dependency of the component library.

## Public entry points

- `import "yxzq-element"` registers every component.
- `import "yxzq-element/button"` registers only `super-button`.
- `import "yxzq-element/checkbox"` registers only `super-checkbox`.
- `import "yxzq-element/input"` registers only `super-input`.
- `import "yxzq-element/radio"` registers only `super-radio`.
- `import "yxzq-element/switch"` registers only `super-switch`.
- `import { registerAll, defineSuperButton, defineSuperCheckbox, defineSuperInput, defineSuperRadio, defineSuperSwitch } from "yxzq-element/define"` supports explicit registration and SSR-sensitive applications.
- Registration must remain idempotent and safe when `customElements` is unavailable.

When an explicitly authorized component is added, update its component export, `packages/components/index.ts`, `packages/core/components.ts`, core subpath exports, `HTMLElementTagNameMap`, tests, docs, and React example JSX declarations as applicable.

## Component design rules

- Use Shadow DOM by default.
- Use slots for consumer-provided content.
- Expose intentional styling hooks through `--super-*` variables and `part` attributes; do not make consumers depend on private shadow markup.
- Prefer native HTML semantics, keyboard behavior, focus behavior, and events.
- Reflect primitive public state to attributes when it improves HTML usage. Keep objects and arrays as JavaScript properties.
- Do not add a framework-specific install API such as Vue `app.use()`, `withInstall()`, or `makeInstaller()`.
- `SuperButton` is the established hand-drawn design baseline. Its supported variants are `primary`, `secondary`, `success`, `warning`, `danger`, `outline`, `ghost`, and `text`; sizes are `large`, `medium`, and `small`; shapes are `default`, `pill`, and `square`.
- Button icons are consumer content supplied through the `prefix`, `suffix`, or default Slot. Do not add an icon-library dependency to the component package.
- Button loading state disables interaction, exposes `aria-busy`, and may replace the label through `loading-text`. Icon-only square buttons require an `aria-label`.
- The current internal native button intentionally uses `type="button"`. Form submission/reset behavior is not part of the public contract yet; do not claim it until a form-associated Custom Element design is implemented and tested.
- `SuperInput` supports native-style `text`, `search`, `password`, `number`, `email`, `tel`, `url`, and `date` types; multiline input is enabled with the separate `multiline` boolean instead of inventing a non-native input type.
- Input sizes are `large`, `medium`, and `small`; validation states are `none`, `success`, `warning`, `error`, and `info`. Prefix, suffix, and action content must remain consumer-provided Slots so the component does not depend on an icon library.
- Input value changes expose composed `super-input` and `super-change` events. Clear and password visibility actions expose `super-clear` and `super-password-visibility`. Keep event detail types exported and do not replace these cross-framework events with Vue-specific model events.
- Built-in Input action labels have Chinese defaults but are localizable through `clear-label`, `decrement-label`, `increment-label`, `password-show-label`, and `password-hide-label`. Do not reintroduce fixed, non-overridable accessible names.
- `SuperInput` is not currently a form-associated Custom Element. Its internal `required`, min/max, and length constraints improve native control semantics, but native form submission, `name`, reset, and external validity APIs are not part of the public contract until ElementInternals behavior is designed and tested.
- `SuperCheckbox`, `SuperRadio`, and `SuperSwitch` form the selector suite. All three support `large`, `medium`, and `small` sizes plus `none`, `success`, `warning`, `error`, and `info` validation states.
- Checkbox supports `default` and `card` variants plus an independent `indeterminate` state. Radio supports `default`, `button`, and `card` variants. Do not add selector Group components unless the project owner explicitly requests them; consumers should use native `fieldset`/`legend` and layout CSS.
- Checkbox and Radio accept consumer content through the default, `icon`, and `description` Slots. Switch accepts the default and `description` Slots plus `checked-icon`, `unchecked-icon`, `checked-label`, and `unchecked-label`. Keep all icons consumer-provided and do not add an icon-library dependency.
- Selector user changes expose composed `super-checkbox-change`, `super-radio-change`, and `super-switch-change` events. Event details include `checked`, `name`, `value`, and `originalEvent`; Checkbox also includes `indeterminate`. Programmatic property changes do not emit user-change events.
- Same-name Radio hosts need explicit coordination because their native inputs live in separate Shadow Roots. The current group boundary is the same consumer tree root, the same nearest `form`, and an identical non-empty `name`. Preserve mutual exclusion, one roving Tab stop, disabled-item skipping, looping arrow-key navigation, and re-coordination when a checked Radio reconnects after its root or nearest form changes.
- The selector suite is not form-associated. `required`, `name`, and `value` improve internal semantics and event payloads, but the hosts do not participate in `FormData`, reset, or external constraint-validation APIs until an ElementInternals contract is explicitly designed and tested.

## Verification commands

Run these from the repository root after architecture or component changes:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm docs:build
```

The library build must succeed before framework examples or docs are built because those workspaces consume the generated package entry points.

Unit tests must run directly against workspace source and must pass in a fresh clone before any `dist` directory exists. Keep Vitest source aliases in sync with any internal workspace package imported by tests; do not make `pnpm test` depend on `pnpm build:library` or residual build output.

## Compatibility notes

- Vue consumers must configure `isCustomElement: (tag) => tag.startsWith("super-")` in the Vue template compiler.
- React TypeScript consumers need `JSX.IntrinsicElements` declarations for `super-*` tags. For future custom events or React versions with limited Custom Element event support, add a thin React adapter rather than adding React to the component implementation.
- Plain browsers cannot resolve npm bare module names by themselves. Native HTML usage needs a bundler, import map, or an ESM-transforming CDN.
- Generated `dist`, VitePress cache, and VitePress output directories must not be committed.
- VitePress's theme toggle is driven by the `html.dark` class. Dark-theme overrides must target that class and maintain readable text/background contrast; do not rely only on `prefers-color-scheme`.
- GitHub Actions artifact upload/download must remain on v4 or newer. Documentation output lives under the hidden `.vitepress` directory, so artifact upload must keep `include-hidden-files: true` and `if-no-files-found: error`.
