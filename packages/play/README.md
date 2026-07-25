# Native HTML playground

This package verifies that the library can be consumed without Vue or React.

Run `pnpm dev` from the workspace root, then use `<super-button>`,
`<super-input>`, `<super-form>`, `<super-checkbox>`, `<super-radio>`,
`<super-switch>`, `<super-select>`, `<super-date-picker>`, and
`<super-time-picker>` directly in HTML. The playground also logs each
component's public event to the page so native-browser interoperability can be
checked without a framework.
The Form demo supplies its own business field Custom Element and verifies that
dependency props, visibility and validation work without built-in field controls.
