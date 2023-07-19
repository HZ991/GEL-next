import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function ShareIosIcon({ 'aria-label': ariaLabel = 'Share', copyrightYear = '2021', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 5l-1.42 1.42-2.59-2.59L13 16h-2l.01-12.17-2.59 2.59L7 5l5-5 5 5zm5 5v12c0 1.1-.9 2-2 2H4a2 2 0 01-2-2V10c0-1.11.89-2 2-2h4v2H4v12h16V10h-4V8h4a2 2 0 012 2z"
      />
    </Icon>
  );
}
