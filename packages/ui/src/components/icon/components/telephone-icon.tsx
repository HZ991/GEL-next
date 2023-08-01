import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function TelephoneIcon({ 'aria-label': ariaLabel = 'Telephone', copyrightYear = '2023', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.90004 0C5.72004 0 5.53704 0.0585 5.38404 0.177L3.66879 1.497L8.42304 7.719L10.1368 6.40125V6.39975C10.5275 6.099 10.5643 5.56275 10.2898 5.2035L10.2913 5.199L6.56829 0.33C6.40029 0.1125 6.15279 0 5.90004 0ZM17.786 15.5588C17.6053 15.5588 17.423 15.6165 17.2693 15.7343L15.5578 17.0557L20.2055 23.1405L21.917 21.8242L21.9185 21.8213C22.3093 21.5182 22.3468 20.9842 22.0715 20.625V20.6213L18.4505 15.8888C18.2863 15.6713 18.0373 15.5588 17.786 15.5588ZM8.39829 11.1517C7.68204 9.97575 7.07304 8.75775 7.95579 8.07975L3.19704 1.85925C2.27154 2.7555 -0.124712 7.287 6.43554 16.0927C11.2543 22.5667 15.3328 24 17.6998 24C18.7258 24 19.43 23.7315 19.7353 23.4862L15.0988 17.4158C14.9015 17.568 14.7013 17.6407 14.4905 17.6407C13.8028 17.6407 12.995 16.8623 11.7335 15.5183C10.6445 14.3565 9.41529 12.828 8.39829 11.1517Z"
        fill="currentColor"
      />
    </Icon>
  );
}
