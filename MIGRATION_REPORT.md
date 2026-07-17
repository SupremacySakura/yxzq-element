# Lit Web Component architecture migration report

Initial migration: 2026-07-16

Button design implementation: 2026-07-17

CI and dark-theme maintenance: 2026-07-17

## Result

The library runtime has been migrated from Vue components and Vue plugins to framework-agnostic Custom Elements implemented with Lit. The existing Button is now `SuperButton`, registered as `super-button`. No additional business component or Element Plus-style API was added.

The documentation and Button now implement the project's original hand-drawn direction: paper-like colors, ink borders, irregular corners, offset shadows, clear semantic colors, and friendly motion.

## Architecture changes

- Replaced `Button.vue` with a `LitElement` class using Shadow DOM, a default Slot, and `part="button"`.
- Replaced Vue `app.use()`, `withInstall()`, and `makeInstaller()` with SSR-safe, idempotent Custom Element registration.
- Added three public entry modes:
  - `yxzq-element`: register every component.
  - `yxzq-element/button`: register only `super-button`.
  - `yxzq-element/define`: export definitions and explicit registration without automatic registration.
- Added ESM builds and TypeScript declarations for utils, components, and core packages.
- Removed Vue dependencies from the root workspace and all runtime library packages.
- Kept theme/reset CSS opt-in and migrated its namespace from `--er-*` to `--super-*`.
- Converted `packages/play` from a Vue application to a native HTML playground.
- Added React and Vue consumer projects under `examples/`.
- Added browser-oriented component tests with Vitest and jsdom.
- Configured Vitest to resolve the internal utils package from source, so tests do not depend on ignored `dist` output in a fresh clone or CI job.
- Added repository ignore rules for package builds, examples, VitePress output/cache, and Playwright artifacts.

## Button design implementation

- Added eight semantic variants: primary, secondary, success, warning, danger, outline, ghost, and text.
- Added large, medium, and small sizes plus default, pill, and square shapes.
- Added framework-neutral prefix and suffix icon Slots without introducing an icon dependency.
- Added loading, custom loading text, disabled behavior, focus indication, reduced-motion handling, and accessible labels for icon-only buttons.
- Exposed `button`, `label`, and `spinner` Parts plus `--super-button-*` visual tokens.
- Expanded the component test suite from two to six focused tests.
- Rebuilt the Button documentation around the supplied type, size, state, icon, loading, and segmented-action design matrix.

## Documentation changes

- Replaced VitePress starter content and Element Plus imitation messaging.
- Added a hand-drawn home page, paper texture, ink borders, irregular corners, and offset shadows.
- Added installation and registration guidance for native HTML, Vue, and React.
- Added a Button page that clearly separates consumer demo styling from component defaults.
- Added a project favicon and Chinese navigation.

## Compatibility verification

- Native HTML playground production build: passed.
- React production build and TypeScript check: passed.
- Vue production build and `vue-tsc` check: passed.
- SSR/Node import of `yxzq-element` and `yxzq-element/define`: passed.
- VitePress client/server build and page rendering: passed.
- Real-browser inspection confirmed the hand-drawn Button documentation renders the registered `super-button` and exposes it as an accessible button.

## Automated verification

The following commands passed after the migration:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm docs:build
```

Vitest currently contains two focused checks: idempotent registration and default Slot rendering.

The test command was additionally verified with `packages/utils/dist` temporarily unavailable, matching the CI test job's fresh-checkout behavior.

## Intentional constraints and follow-up work

- `SuperButton` intentionally uses an internal `type="button"`. Native form submit/reset behavior is deferred until a form-associated Custom Element contract is designed and tested.
- Package names remain `yxzq-element` and `@yxzq-element/*`; only Custom Element, class, event, and CSS namespaces use `super`.
- Vue appears only in the Vue consumer example and inside VitePress. It is not a runtime dependency of the library packages.
- React TypeScript consumers need JSX declarations for `super-*` elements. Future complex custom events may justify a thin React adapter, especially for older React versions.
- Plain browsers need a bundler, import map, or ESM-transforming CDN to resolve npm bare module imports.
- The public core package depends on the workspace components package, which in turn depends on utils. If packages are published independently, publish them in dependency order or introduce a bundled distribution in a separate release workflow.

Future agents must follow the durable repository rules in `AGENTS.md`.

## CI and documentation theme maintenance

- Migrated GitHub-hosted workflow steps from artifact v3 to `actions/upload-artifact@v4` and `actions/download-artifact@v4` after GitHub disabled v3.
- Upgraded official checkout/setup-node actions to v4, adopted `pnpm/action-setup@v4`, pinned Node 22 and pnpm 10.22.0, and made the downloaded deployment directory explicit.
- Kept hidden documentation output upload enabled because the build lives under `.vitepress/dist`.
- Replaced the media-query-only dark theme with VitePress `html.dark` selectors and explicit high-contrast text, surface, divider, navigation, and code colors.
