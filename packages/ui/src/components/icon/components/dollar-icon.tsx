import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function DollarIcon({ 'aria-label': ariaLabel = 'Dollar', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24,12 C24,18.627 18.62775,24 12,24 C5.37225,24 0,18.627 0,12 C0,5.373 5.37225,0 12,0 C18.62775,0 24,5.373 24,12 Z M12,2 C6.47714286,2 2,6.47714286 2,12 C2,17.5228571 6.47714286,22 12,22 C17.5228571,22 22,17.5228571 22,12 C22,6.47714286 17.5228571,2 12,2 Z M11,18.4461876 C8.57453187,18.1650794 7.06873973,16.7978464 7,14.7036169 L9.50430293,14.7036169 C9.62478485,15.7397857 10.6919105,16.4189551 12.0688468,16.4189551 C13.454389,16.4189551 14.4010327,15.748493 14.4010327,14.8255191 C14.4010327,14.0070328 13.8072289,13.5542532 12.3098107,13.2146685 L10.6919105,12.8576691 C8.40275387,12.361353 7.27538726,11.1858674 7.27538726,9.34862693 C7.27538726,7.32989847 8.77903863,5.90649143 11,5.57422136 L11,4 L13,4 L13,5.56126841 C15.3198703,5.86481374 16.7382778,7.27356464 16.7762478,9.27896852 L14.3407917,9.27896852 C14.2547332,8.21667783 13.3339071,7.57233758 12.0344234,7.57233758 C10.7521515,7.57233758 9.89156627,8.19055593 9.89156627,9.12223711 C9.89156627,9.89718687 10.4939759,10.3325519 11.9225473,10.6634293 L13.4285714,10.9855995 C15.9156627,11.5254521 17,12.6051574 17,14.5207636 C17,16.6733683 15.4771218,18.1268298 13,18.4376583 L13,20 L11,20 L11,18.4461876 L11,18.4461876 Z"
      />
    </Icon>
  );
}
