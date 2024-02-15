import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export const RedAvatarLogo = ({
  'aria-label': ariaLabel = 'Red Avatar',
  copyrightYear = '2024',
  viewBoxWidth = 67,
  viewBoxHeight = 32,
  className,
  ...props
}: SymbolProps) => (
  <Symbol
    className={clsx('h-[32px] w-[67px]', className)}
    aria-label={ariaLabel}
    copyrightYear={copyrightYear}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M40.6591036 26.6817019H26.2992858c-5.8865128 0-10.6758928-4.7909095-10.6758928-10.681008 0-5.8900984 4.78938-10.68378363 10.6758928-10.68378363h14.3598178c5.8865128 0 10.6745058 4.79368523 10.6745058 10.68378363 0 5.8900985-4.787993 10.681008-10.6745058 10.681008zM58.1272332 5.47373899c-1.7018735 0-2.8322948.60510908-3.5147086 2.71882726C51.8717731 3.30866982 46.6440948 0 40.6591036 0H26.2992858c-5.96696 0-11.179381 3.28785185-13.9270676 8.14676671-.6851879-2.07763369-1.8114481-2.67302772-3.49945141-2.67302772H0c.694897.28590017 1.15677466 2.08457302 1.15677466 2.08457302L5.43989235 22.4431626c.49655315 1.869454 2.04169341 2.8520623 3.79211262 2.8520623h4.05980743C16.1948453 29.3519539 20.9440017 32 26.2992858 32h14.3598178c5.3538971 0 10.1030535-2.6480461 13.0074734-6.7047751h4.101418c1.7504192 0 3.2955595-.9826083 3.7893386-2.8520623l4.2858917-14.88485059S66.303716 5.75963916 67 5.47373899h-8.8727668z"
        fill="#DA1710"
      />
      <path
        d="M24.554105 12.8510734c-1.7792427 0-3.2198464 1.4419916-3.2198464 3.2198465 0 1.7792427 1.4406037 3.2198465 3.2198464 3.2198465 1.7778549 0 3.2198465-1.4406038 3.2198465-3.2198465 0-1.7778549-1.4419916-3.2198465-3.2198465-3.2198465M43.1655116 12.8510734c-1.7792428 0-3.2198465 1.4419916-3.2198465 3.2198465 0 1.7792427 1.4406037 3.2198465 3.2198465 3.2198465 1.7778548 0 3.2184586-1.4406038 3.2184586-3.2198465 0-1.7778549-1.4406038-3.2198465-3.2184586-3.2198465"
        fill="#2A2E42"
      />
    </g>
  </Symbol>
);
