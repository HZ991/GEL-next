import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function FacebookIcon({ 'aria-label': ariaLabel = 'Facebook', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L2,0 Z M20.7142857,9.14285714 L16.4285714,9.14285714 L16.4285714,7 C16.4285714,6.07642857 16.5514286,5.57 17.5,5.57142857 L20.7142857,5.57142857 L20.7142857,2 L16.7828571,2 C13.3885714,2 12.1428571,3.42857143 12.1428571,6.64285714 L12.1428571,9.14285714 L10,9.14285714 L10,12 L12.1428571,12 L12.1428571,22 L16.4285714,22 L16.4285714,12 L20,12 L20.7142857,9.14285714 Z"
      />
    </Icon>
  );
}