import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function PlaneIcon({ 'aria-label': ariaLabel = 'Plane', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7,24 L7,22.5 L10,20 L10,14 L0,17 L0,15 L10,8 L10,2 C10,0.8954305 10.8954305,0 12,0 C13.1045695,0 14,0.8954305 14,2 L14,8 L24,15 L24,17 L14,14 L14,20 L17,22.5 L17,24 L12,22.5 L7,24 Z"
      />
    </Icon>
  );
}
