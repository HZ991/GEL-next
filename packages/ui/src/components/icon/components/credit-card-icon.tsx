import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export const CreditCardIcon = ({
  'aria-label': ariaLabel = 'Credit Card',
  copyrightYear = '2020',
  ...props
}: IconProps) => (
  <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2,2 L22,2 C23.1045695,2 24,2.8954305 24,4 L24,20 C24,21.1045695 23.1045695,22 22,22 L2,22 C0.8954305,22 1.3527075e-16,21.1045695 0,20 L0,4 C-1.3527075e-16,2.8954305 0.8954305,2 2,2 Z M2,6 L2,10 L22,10 L22,6 L2,6 Z"
    />
  </Icon>
);
