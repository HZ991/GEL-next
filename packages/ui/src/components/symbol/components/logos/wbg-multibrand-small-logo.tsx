import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export const WBGMultibrandSmallLogo = ({
  'aria-label': ariaLabel = 'Westpac Group',
  copyrightYear = '2020',
  viewBoxWidth = 122,
  viewBoxHeight = 44,
  align = 'left',
  offset = [null, null, 0.73],
  className,
  ...props
}: SymbolProps) => (
  <Symbol
    className={clsx('h-[44px] w-[122px]', className)}
    aria-label={ariaLabel}
    align={align}
    offset={offset}
    copyrightYear={copyrightYear}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    {...props}
  >
    <path
      fill="#000"
      d="M111.192 22.89v-7.487h4.32c2.749 0 4.627 1.266 4.627 3.69v.043c0 2.27-1.922 3.754-4.757 3.754h-4.19zm-1.133 6.74h1.133v-5.694h4.124c3.187 0 5.957-1.66 5.957-4.866v-.044c0-2.944-2.312-4.669-5.674-4.669h-5.54V29.63zm-10.276.243c3.708 0 6.26-2.338 6.26-6.723v-8.793h-1.133v8.927c0 3.686-1.986 5.562-5.086 5.562-3.23 0-5.172-2.073-5.172-5.674v-8.815h-1.134v8.927c0 4.275 2.598 6.589 6.265 6.589zm-17.08-1.007c-3.776 0-6.526-3.097-6.526-6.874v-.042c0-3.775 2.708-6.83 6.482-6.83s6.524 3.098 6.524 6.872v.046c0 3.776-2.705 6.828-6.48 6.828zm-.044 1.027c4.624 0 7.703-3.73 7.703-7.9v-.043c0-4.168-3.036-7.856-7.659-7.856-4.625 0-7.704 3.732-7.704 7.898v.046c0 4.168 3.035 7.855 7.66 7.855zM61.8 22.277v-6.874h5.212c2.772 0 4.387 1.29 4.387 3.339v.045c0 2.203-1.898 3.49-4.45 3.49H61.8zm-1.136 7.353H61.8v-6.326h4.994l4.867 6.326H73.1l-5.04-6.523c2.575-.349 4.473-1.81 4.473-4.365V18.7a4.024 4.024 0 00-1.159-2.84c-.915-.915-2.421-1.503-4.295-1.503h-6.416V29.63zm-9.756.263c2.486 0 4.625-1.07 6-2.29V21.71H50.71v1.047h5.106v4.385c-1.115.94-2.925 1.745-4.867 1.745-4.082 0-6.547-2.944-6.547-6.896v-.042c0-3.688 2.598-6.83 6.308-6.83 2.312 0 3.707.785 4.91 1.832l.741-.848c-1.528-1.268-3.098-2.01-5.587-2.01-4.56 0-7.55 3.774-7.55 7.898v.046c0 4.3 2.859 7.855 7.682 7.855z"
    />
    <path
      fill="#DA1710"
      d="M40 14c-.575.23-.956 1.68-.956 1.68l-3.537 12.017C35.099 29.205 33.824 30 32.379 30h-7.764c.556-.099 1.166-1.693 1.166-1.693l3.945-11.964C30.284 14.516 31.23 14 32.676 14H40zM7.323 14c1.446 0 2.391.516 2.951 2.343l3.943 11.964s.61 1.594 1.168 1.693H7.622c-1.447 0-2.722-.795-3.13-2.303L.957 15.68S.575 14.229 0 14h7.323zm16.908 0v16H15.77V14h8.462z"
    />
  </Symbol>
);
