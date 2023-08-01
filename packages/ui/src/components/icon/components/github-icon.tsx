import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function GithubIcon({ 'aria-label': ariaLabel = 'Github', copyrightYear = '2023', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        d="M11.9992 0C5.37299 0 0 5.50874 0 12.3045C0 17.7397 3.43799 22.3515 8.20648 23.979C8.80723 24.0915 9.02623 23.712 9.02623 23.3857C9.02623 23.094 9.01573 22.32 9.00973 21.2932C5.67149 22.0365 4.96724 19.6432 4.96724 19.6432C4.42124 18.2227 3.63524 17.844 3.63524 17.844C2.5455 17.0805 3.71774 17.0962 3.71774 17.0962C4.92149 17.1832 5.55524 18.3637 5.55524 18.3637C6.62624 20.244 8.36398 19.7017 9.04798 19.3867C9.15673 18.591 9.46723 18.0487 9.80998 17.7412C7.14524 17.4307 4.34324 16.3755 4.34324 11.661C4.34324 10.3177 4.81124 9.21898 5.57849 8.35948C5.45549 8.04748 5.04374 6.79724 5.69624 5.10299C5.69624 5.10299 6.70424 4.77149 8.99623 6.36374C9.95323 6.09149 10.98 5.95424 12.0007 5.95049C13.02 5.95424 14.046 6.09149 15.0045 6.36374C17.2957 4.77149 18.3015 5.10299 18.3015 5.10299C18.9562 6.79724 18.5445 8.04748 18.4215 8.35948C19.1902 9.21898 19.6545 10.3177 19.6545 11.661C19.6545 16.3875 16.8487 17.427 14.1757 17.7322C14.6062 18.1117 14.9902 18.8625 14.9902 20.0107C14.9902 21.6555 14.9752 22.983 14.9752 23.3857C14.9752 23.715 15.1912 24.0975 15.8002 23.9775C20.565 22.347 24 17.7382 24 12.3045C24 5.50874 18.6262 0 11.9992 0"
        fill="currentColor"
      />
    </Icon>
  );
}
