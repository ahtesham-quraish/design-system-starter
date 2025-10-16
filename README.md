# 🌟 Design System Starter

**TypeScript • React • Storybook • CSS Variables • Monorepo**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-8.x-FF4785?logo=storybook)](https://storybook.js.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Yarn Workspaces](https://img.shields.io/badge/Monorepo-Yarn%20Workspaces-2C8EBB?logo=yarn)](https://classic.yarnpkg.com/en/docs/workspaces/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🧭 Overview

The **Design System Starter** is a minimal, scalable **monorepo** setup for building a **token-driven design system** with:

- 🧩 **Reusable React components** powered by **CSS Modules & Variables**
- 🎨 **Design tokens** as the single source of truth for theming
- 📘 **Storybook** for interactive component documentation
- ⚡ **Vite** for fast builds and dev experience
- 🧶 **Yarn Workspaces** for modular monorepo structure

This project helps you **kickstart a consistent design system** that can scale across multiple apps and teams.

---

## 🏗️ Project Structure

```bash
design-system-starter/
├── apps/
│   ├── docs/         # Storybook documentation site
│   └── react-app/    # Example React consumer app
├── packages/
│   ├── tokens/       # Design tokens (colors, spacing, typography)
│   ├── ui/           # Reusable UI component library
├── package.json
└── yarn.lock

```

## Setup

```bash
git clone https://github.com/ahtesham-quraish/design-system-starter.git
cd design-system-starter
```

1️⃣ Install Dependencies

```bash
yarn
```

2️⃣ Build Design Tokens
Generate the CSS variables and token exports:

```bash
yarn run build --workspace=@ds/tokens
# (this runs tokens build)
```

3️⃣ Build UI Components
Build the UI component library that consumes the tokens:

```bash
yarn workspace @ds/ui build
# (this runs ui elements build)
```

4️⃣ Build react app:

```bash
yarn workspace react-app dev
# (this runs react app consuming these ui packages)
```

For Running the Storybook:

```bash
yarn run storybook --workspace=@ds/docs
```

For Running the Storybook:

```bash
yarn  test --workspace=@ds/ui
```

Notes:

- Tokens generator outputs `packages/tokens/build/dist/tokens.css`.
- Components consume CSS variables via `@import` in `themes.css`.
