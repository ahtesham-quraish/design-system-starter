# Design System Starter (TypeScript + CSS Modules + CSS Variables)

This scaffold is minimal and intended to be a starting point for a token-driven design system.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build tokens:
   ```bash
   npm run build
   # (this runs tokens build and ui build in workspaces)
   ```

3. Run Storybook (from root):
   ```bash
   npm run storybook
   ```

Notes:
- Tokens generator outputs `packages/tokens/build/dist/tokens.css`.
- Components consume CSS variables via `@import` in `themes.css`.
