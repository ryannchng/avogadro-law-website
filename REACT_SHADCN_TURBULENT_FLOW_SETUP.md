# React/shadcn Turbulent Flow Setup Notes

The current Avogadro site is a static HTML/CSS/JS project. It does not currently support:

- React
- TypeScript
- Tailwind CSS
- shadcn project structure
- npm dependencies such as `three` and `gsap`

Because of that, the pasted React component should not be copied directly into the live static site. To use it as a React component later, first migrate or recreate the project as a React app.

## Recommended Setup

Create a React + TypeScript app, then initialize shadcn:

```bash
npm create vite@latest avogadro-law-react -- --template react-ts
cd avogadro-law-react
npm install
npm install three gsap
npx shadcn@latest init
```

If using Next.js instead:

```bash
npx create-next-app@latest avogadro-law-react --typescript --tailwind --eslint --app
cd avogadro-law-react
npm install three gsap
npx shadcn@latest init
```

## Component Path

The default shadcn component path is:

```text
components/ui
```

Use this path for the turbulent flow component:

```text
components/ui/turbulent-flow.tsx
```

This matters because shadcn aliases and many generated examples assume imports like:

```tsx
import { Component } from "@/components/ui/turbulent-flow";
```

If the project uses a different alias or component directory, either create `components/ui` or update the import path consistently.

## Tailwind / Global CSS

For Tailwind 4, place global imports and keyframes in the main CSS entry file, often:

```text
src/index.css
```

or, in Next.js:

```text
app/globals.css
```

The pasted optional CSS was:

```css
@import "tailwindcss";
@import "tw-animate-css";

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(100px, -100px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(-100px, 100px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) rotate(270deg) scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Only import `tw-animate-css` if it is installed:

```bash
npm install tw-animate-css
```

## Implementation Questions

Before wiring the component into the app, decide:

- What text/content should sit on top of the turbulent background?
- Should the component fill the hero only or the entire viewport?
- Should motion pause or simplify for `prefers-reduced-motion`?
- Should the palette match the current Avogadro teal/dark science theme?
- Should the component be interactive on pointer movement, or purely ambient?

## Current Static Site

The current static site already has a WebGL-inspired turbulent hero implemented directly in:

```text
index.html
styles.css
script.js
```

That implementation avoids React, TypeScript, Tailwind, shadcn, and npm dependencies so the existing site can keep running as a simple static website.
