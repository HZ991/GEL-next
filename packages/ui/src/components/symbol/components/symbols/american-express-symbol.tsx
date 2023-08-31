import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export function AmericanExpressSymbol({
  'aria-label': ariaLabel = 'American Express',
  copyrightYear = '',
  viewBoxWidth = 80,
  viewBoxHeight = 70,
  className,
  ...props
}: SymbolProps) {
  return (
    <Symbol
      className={clsx('h-[70px] w-[80px]', className)}
      aria-label={ariaLabel}
      copyrightYear={copyrightYear}
      viewBoxWidth={viewBoxWidth}
      viewBoxHeight={viewBoxHeight}
      {...props}
    >
      <g>
        <path fill="#007CC3" d="M78.7 0H9v70h69.7V46.9c0.3-0.4 0.4-0.9 0.4-1.5c0-0.7-0.1-1.2-0.4-1.5V0z" />
        <g>
          <path
            fill="#FFFFFF"
            d="M9 35.4h3.4l0.8-1.8h1.7l0.8 1.8h6.6V34l0.6 1.4h3.4l0.6-1.4v1.4h16.4l0-3h0.3c0.2 0 0.3 0 0.3 0.4v2.6 h8.5v-0.7c0.7 0.4 1.7 0.7 3.1 0.7h3.6l0.8-1.8h1.7l0.7 1.8H69v-1.7l1 1.7h5.5V24H70v1.4L69.3 24h-5.6v1.4L63 24h-7.5 c-1.3 0-2.4 0.2-3.3 0.7V24H47v0.7c-0.6-0.5-1.4-0.7-2.2-0.7h-19l-1.3 3l-1.3-3h-6v1.4L16.5 24h-5.1L9 29.4V35.4z M73.7 33.8H71 l-3.7-6.1l0 6.1h-4L62.5 32h-4.1l-0.7 1.8h-2.3c-1 0-2.2-0.2-2.8-0.9c-0.7-0.7-1-1.6-1-3.1c0-1.2 0.2-2.3 1.1-3.2 c0.6-0.7 1.6-1 3-1h1.9v1.8h-1.9c-0.7 0-1.1 0.1-1.5 0.5c-0.3 0.3-0.6 1-0.6 1.9c0 0.9 0.2 1.5 0.5 1.9c0.3 0.3 0.8 0.4 1.4 0.4 h0.9l2.8-6.5H62l3.3 7.8v-7.8h3l3.4 5.7v-5.7h2V33.8z M50.5 33.8h-2v-8.2h2V33.8z M47.4 27.8c0 1.3-0.9 2-1.4 2.2 c0.4 0.2 0.8 0.4 1 0.7c0.3 0.4 0.3 0.8 0.3 1.5v1.6h-2l0-1c0-0.5 0-1.2-0.3-1.6c-0.3-0.3-0.7-0.4-1.4-0.4h-2.1v3h-2v-8.2H44 c1 0 1.7 0 2.4 0.4C47 26.4 47.4 26.9 47.4 27.8z M38.2 33.8h-6.5v-8.2h6.5v1.7h-4.6v1.5h4.5v1.7l-4.5 0v1.6h4.6V33.8z M30.2 33.8 h-2l0-6.4l-2.8 6.4h-1.7l-2.9-6.4v6.4h-4L16 32h-4.1l-0.8 1.8H9l3.5-8.2h2.9l3.3 7.8v-7.8H22l2.6 5.6l2.4-5.6h3.3V33.8z M61.8 30.3L60.5 27l-1.3 3.3H61.8z M44.8 29c-0.3 0.2-0.6 0.2-1 0.2h-2.4v-1.8h2.4c0.3 0 0.7 0 0.9 0.1c0.3 0.1 0.4 0.4 0.4 0.7 C45.2 28.6 45.1 28.9 44.8 29z M15.3 30.3L13.9 27l-1.3 3.3H15.3z"
          />
          <path
            fill="#FFFFFF"
            d="M47 42.4c0 2.3-1.7 2.7-3.4 2.7h-2.4v2.8h-3.8l-2.4-2.7l-2.5 2.7h-7.8v-8.2h7.9l2.4 2.7l2.5-2.7h6.3 C45.2 39.7 47 40.2 47 42.4z M31.4 46.2h-4.8v-1.6h4.3v-1.7h-4.3v-1.5h4.9l2.1 2.4L31.4 46.2z M39.2 47.2l-3-3.3l3-3.2V47.2z M43.7 43.5h-2.5v-2.1h2.6c0.7 0 1.2 0.3 1.2 1C44.9 43.2 44.4 43.5 43.7 43.5z M56.9 39.7h6.5v1.7h-4.6v1.5h4.5v1.7h-4.5v1.6 l4.6 0v1.7h-6.5V39.7z M54.4 44.1c0.4 0.2 0.8 0.4 1 0.7c0.3 0.4 0.3 0.8 0.3 1.5v1.6h-2v-1c0-0.5 0-1.2-0.3-1.6 c-0.3-0.3-0.7-0.4-1.4-0.4h-2.1v3h-2v-8.2h4.5c1 0 1.7 0 2.4 0.4c0.6 0.4 1 0.9 1 1.8C55.8 43.3 54.9 43.9 54.4 44.1z M53.2 43.1 c-0.3 0.2-0.6 0.2-1 0.2h-2.4v-1.8h2.4c0.3 0 0.7 0 0.9 0.1c0.3 0.1 0.4 0.4 0.4 0.7C53.6 42.7 53.5 43 53.2 43.1z M70.9 43.6 c0.4 0.4 0.6 0.9 0.6 1.7c0 1.8-1.1 2.6-3.1 2.6h-3.8v-1.8h3.8c0.4 0 0.6 0 0.8-0.2c0.1-0.1 0.2-0.3 0.2-0.5 c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.2-0.7-0.2c-1.8-0.1-4.1 0.1-4.1-2.5c0-1.2 0.7-2.4 2.8-2.4h3.9v1.7h-3.6 c-0.4 0-0.6 0-0.8 0.1c-0.2 0.1-0.3 0.3-0.3 0.6c0 0.3 0.2 0.5 0.4 0.6c0.2 0.1 0.4 0.1 0.8 0.1l1.1 0 C69.8 43 70.5 43.2 70.9 43.6z M78.7 46.9c-0.5 0.7-1.4 1.1-2.7 1.1h-3.8v-1.8h3.8c0.4 0 0.6 0 0.8-0.2c0.1-0.1 0.2-0.3 0.2-0.5 c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.2-0.7-0.2c-1.8-0.1-4.1 0.1-4.1-2.5c0-1.2 0.8-2.4 2.8-2.4h3.9v-1.6h-3.6 c-1.1 0-1.9 0.3-2.5 0.7v-0.7h-5.4c-0.9 0-1.9 0.2-2.3 0.7l0-0.7h-9.6v0.7c-0.8-0.5-2-0.7-2.6-0.7h-6.3v0.7 c-0.6-0.6-1.9-0.7-2.8-0.7h-7.1L35 39.9l-1.5-1.8H22.9v11.4h10.4l1.7-1.8l1.6 1.8l6.4 0v-2.7h0.6c0.8 0 1.8 0 2.7-0.4v3.1h5.3v-3 h0.3c0.3 0 0.4 0 0.4 0.3v2.6h16c1 0 2.1-0.3 2.7-0.7v0.7h5.1c1.1 0 2.1-0.1 2.9-0.5V46.9z M78.7 41.5h-3.6c-0.4 0-0.6 0-0.8 0.1 c-0.2 0.1-0.3 0.3-0.3 0.6c0 0.3 0.2 0.5 0.4 0.6c0.2 0.1 0.4 0.1 0.8 0.1l1.1 0c1.1 0 1.8 0.2 2.2 0.7c0.1 0.1 0.1 0.1 0.2 0.2 V41.5z"
          />
        </g>
        <path
          fill="#007CC3"
          d="M5 68.1H4.4c-0.1-0.3-0.1-0.7-0.1-0.9c0-0.2 0-0.5-0.5-0.5H2.9l0 1.3H2.3v-3.3h1.5 c0.5 0 1.1 0.2 1.1 0.9c0 0.4-0.2 0.6-0.4 0.7c0.1 0.1 0.3 0.2 0.3 0.6l0 0.6c0 0.2 0 0.2 0.2 0.3V68.1z M4.3 65.8 c0-0.4-0.3-0.5-0.5-0.5h-1v0.9h0.9C4.1 66.3 4.3 66.2 4.3 65.8z M7 66.5C7 64.6 5.4 63 3.5 63C1.6 63 0 64.6 0 66.5 C0 68.4 1.6 70 3.5 70C5.4 70 7 68.4 7 66.5z M6.5 66.5c0 1.6-1.3 3-3 3c-1.7 0-3-1.3-3-3c0-1.6 1.3-3 3-3 C5.2 63.5 6.5 64.9 6.5 66.5z"
        />
      </g>
    </Symbol>
  );
}
