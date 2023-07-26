# @westpac/ui

### Basic Usage (with NextJS)

Following example is to use the `wbc` theme.

1. Use `withGEL` with your config in the `tailwind.config.ts`

```tsx
// tailwind.config.ts
import { withGEL } from '@westpac/ui/tailwind';
import { type Config } from 'tailwindcss';

const config: Config = withGEL({
  relative: true,
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@westpac/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
});

export default config;
```

2. Define the font-faces of the theme you are using

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* WBC fonts */
@font-face {
  src: url('/path-to-the-font/Westpac-Bold-v2.007.woff2') format('woff2'), url('/path-to-the-font/Westpac-Bold-v2.007.woff')
      format('woff');
  font-family: 'Westpac';
  font-weight: 400;
  font-style: normal;
}
```

3. Add the data-theme attribute with the theme/brand of your choice

```ts
// _document.tsx
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // e.g: in this case theme wbc is applied
    <Html lang="en" data-theme="wbc">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```