import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export const PresetsIcon = ({ 'aria-label': ariaLabel = 'Presets', copyrightYear = '2021', ...props }: IconProps) => (
  <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 13a4.002 4.002 0 013.874 3H24v2h-4.126a4.002 4.002 0 01-7.748 0H0v-2h12.126c.444-1.725 2.01-3 3.874-3zm0 2a2 2 0 100 4 2 2 0 000-4zM8 3a4.002 4.002 0 013.874 3H24v2H11.874a4.002 4.002 0 01-7.748 0H0V6h4.126C4.57 4.275 6.136 3 8 3zm0 2a2 2 0 100 4 2 2 0 000-4z"
    />
  </Icon>
);
