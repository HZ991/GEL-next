import React, { Fragment } from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function PiggyBankIcon({
  look = 'filled',
  'aria-label': ariaLabel = 'Piggy Bank',
  copyrightYear = '2024',
  ...props
}: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      {look === 'filled' ? (
        <Fragment>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M.99 15.975A101.66 101.66 0 0 0 3 24h6v-3h4v3h5.6l2.01-7.92L24 14.97V6.5h-2.61l-2.73-2.63c.04-.24.095-.475.165-.705.07-.23.145-.455.225-.675.04-.1.075-.21.105-.33a1.736 1.736 0 0 0-.48-1.635A1.736 1.736 0 0 0 17.4 0c-.96 0-1.855.21-2.685.63A6.098 6.098 0 0 0 12.6 2.4h-6c-1.84 0-3.4.64-4.68 1.92C.64 5.6 0 7.16 0 9c0 2.136.42 4.19.845 6.264l.145.711ZM6 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm12.5 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
            clip-rule="evenodd"
          />
        </Fragment>
      ) : (
        <Fragment>
          <path
            fill="currentColor"
            d="M18.5 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7 6a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Z"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12.6 2.4h-6c-1.84 0-3.4.64-4.68 1.92C.64 5.6 0 7.16 0 9c0 2.136.42 4.19.845 6.264l.145.711A101.66 101.66 0 0 0 3 24h6v-3h4v3h5.6l2.01-7.92L24 14.97V6.5h-2.61l-2.73-2.63c.04-.24.095-.475.165-.705.07-.23.145-.455.225-.675.04-.1.075-.21.105-.33a1.736 1.736 0 0 0-.48-1.635A1.736 1.736 0 0 0 17.4 0c-.96 0-1.855.21-2.685.63A6.098 6.098 0 0 0 12.6 2.4ZM22 8.5h-1.417l-4.069-3.92.173-1.039c.054-.324.129-.644.225-.958.058-.193.12-.384.186-.573a3.808 3.808 0 0 0-1.48.405 4.1 4.1 0 0 0-1.428 1.198l-.6.787H6.6c-1.32 0-2.368.436-3.266 1.334C2.436 6.632 2 7.681 2 9c0 1.921.378 3.772.808 5.877l.142.702A99.66 99.66 0 0 0 4.507 22H7v-3h8v3h2.044l1.898-7.478L22 13.52V8.5Z"
            clip-rule="evenodd"
          />
        </Fragment>
      )}
    </Icon>
  );
}
