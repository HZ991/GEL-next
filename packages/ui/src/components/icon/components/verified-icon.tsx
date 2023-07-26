import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function VerifiedIcon({ 'aria-label': ariaLabel = 'Verified', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12,8.8817842e-16 L22,4.5 L22,11 C22,17.0545455 17.7333333,22.6254545 12,24 C6.26666667,22.6254545 2,17.0545455 2,11 L2,4.5 L12,8.8817842e-16 Z M7.4,12.1426407 L6,13.5426407 L10.136039,17.6786797 L19.4147186,8.4 L18.0147186,7 L10.136039,14.8786797 L7.4,12.1426407 Z"
      />
    </Icon>
  );
}