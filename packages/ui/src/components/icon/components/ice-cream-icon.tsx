import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function IceCreamIcon({
  look = 'filled',
  'aria-label': ariaLabel = 'Ice Cream',
  copyrightYear = '2023',
  ...props
}: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      {look === 'filled' ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.408 13.9565C17.6012 13.9852 17.7989 14 18 14C20.2091 14 22 12.2091 22 10C22 8.11613 20.6977 6.53644 18.9442 6.1121C18.5079 2.66532 15.5652 0 12 0C8.43478 0 5.49209 2.66532 5.05578 6.11209C3.30232 6.53643 2 8.11613 2 10C2 12.2091 3.79086 14 6 14C6.20113 14 6.3988 13.9852 6.59196 13.9565L12 24L17.408 13.9565ZM12 14C13.2574 14 14.4374 13.6685 15.4573 13.088C15.4911 13.1159 15.5254 13.1432 15.5601 13.1699L12 19.7815L8.43992 13.1699C8.47463 13.1432 8.50888 13.1159 8.54266 13.088C9.56257 13.6685 10.7426 14 12 14Z"
          fill="currentColor"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.408 13.9565C17.6012 13.9852 17.7989 14 18 14C20.2091 14 22 12.2091 22 10C22 8.11613 20.6977 6.53644 18.9442 6.1121C18.5079 2.66532 15.5652 0 12 0C8.43478 0 5.49209 2.66532 5.05578 6.11209C3.30232 6.53643 2 8.11613 2 10C2 12.2091 3.79086 14 6 14C6.20114 14 6.3988 13.9852 6.59197 13.9565L12 24L17.408 13.9565ZM15.666 10.668L14.4681 11.3498C13.7417 11.7632 12.9015 12 12 12C11.0985 12 10.2583 11.7632 9.53191 11.3498L8.33402 10.668L7.27049 11.5448C6.92428 11.8302 6.48463 12 6 12C5.82925 12 5.66349 11.9786 5.50526 11.9383C4.63998 11.7182 4 10.9338 4 10C4 9.0607 4.64942 8.26816 5.52621 8.05598L6.86674 7.73157L7.03995 6.36326C7.35134 3.90331 9.45495 2 12 2C14.5451 2 16.6487 3.90331 16.9601 6.36326L17.1333 7.73157L18.4738 8.05598C19.3506 8.26817 20 9.0607 20 10C20 10.9492 19.3387 11.744 18.4517 11.9488C18.3065 11.9823 18.1553 12 18 12C17.5154 12 17.0757 11.8302 16.7295 11.5448L15.666 10.668ZM8.43993 13.1699C8.47463 13.1432 8.50888 13.1159 8.54266 13.088C9.56257 13.6685 10.7426 14 12 14C13.2574 14 14.4374 13.6685 15.4573 13.088C15.4911 13.1159 15.5254 13.1432 15.5601 13.1699L12 19.7815L8.43993 13.1699Z"
          fill="currentColor"
        />
      )}
    </Icon>
  );
}
