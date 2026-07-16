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
- `import { registerAll, defineSuperButton } from "yxzq-element/define"` supports explicit registration and SSR-sensitive applications.
- Registration must remain idempotent and safe when `customElements` is unavailable.

When an explicitly authorized component is added, update its component export, `packages/components/index.ts`, `packages/core/components.ts`, core subpath exports, `HTMLElementTagNameMap`, tests, docs, and React example JSX declarations as applicable.

## Component design rules

- Use Shadow DOM by default.
- Use slots for consumer-provided content.
- Expose intentional styling hooks through `--super-*` variables and `part` attributes; do not make consumers depend on private shadow markup.
- Prefer native HTML semantics, keyboard behavior, focus behavior, and events.
- Reflect primitive public state to attributes when it improves HTML usage. Keep objects and arrays as JavaScript properties.
- Do not add a framework-specific install API such as Vue `app.use()`, `withInstall()`, or `makeInstaller()`.
- `SuperButton` is intentionally an architecture-only minimal component. Its final hand-drawn design and product API have not been specified.

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
