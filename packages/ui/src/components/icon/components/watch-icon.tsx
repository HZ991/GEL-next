import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function WatchIcon({ 'aria-label': ariaLabel = 'Watch', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20,12 C20,9.46 18.81,7.19 16.96,5.73 L16,0 L8,0 L7.05,5.73 C5.19,7.19 4,9.45 4,12 C4,14.55 5.19,16.81 7.05,18.27 L8,24 L16,24 L16.96,18.27 C18.81,16.81 20,14.54 20,12 Z M6,12 C6,8.69 8.69,6 12,6 C15.31,6 18,8.69 18,12 C18,15.31 15.31,18 12,18 C8.69,18 6,15.31 6,12 Z"
      />
    </Icon>
  );
}