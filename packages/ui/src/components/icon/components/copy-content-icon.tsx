import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function CopyContentIcon({ 'aria-label': ariaLabel = 'Copy', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 0H4C2.9 0 2 .9 2 2v16h2V2h12V0zm3.867 4H8.133C6.96 4 6 5 6 6.222v15.556C6 23 6.96 24 8.133 24h11.734C21.04 24 22 23 22 21.778V6.222C22 5 21.04 4 19.867 4zM20 22H8V6h12v16z"
      />
    </Icon>
  );
}
