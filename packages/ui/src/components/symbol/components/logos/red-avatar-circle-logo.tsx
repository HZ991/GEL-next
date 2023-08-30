import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export const RedAvatarCircleLogo = ({
  'aria-label': ariaLabel = 'Red Avatar',
  copyrightYear = '2020',
  viewBoxWidth = 64,
  viewBoxHeight = 64,
  className,
  ...props
}: SymbolProps) => (
  <Symbol
    className={clsx('h-[64px] w-[64px]', className)}
    aria-label={ariaLabel}
    copyrightYear={copyrightYear}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle fill="#FFF" cx="32" cy="32" r="32" />
      <path
        d="M37.7648096 41.6860687H26.0903507c-4.785705 0-8.6794466-3.8926139-8.6794466-8.6783189s3.8937416-8.6805742 8.6794466-8.6805742h11.6744589c4.785705 0 8.678319 3.8948692 8.678319 8.6805742s-3.892614 8.6783189-8.678319 8.6783189zm14.2015006-17.2314698c-1.3836145 0-2.3026412.4916511-2.8574402 2.2090471-2.228217-3.9681658-6.4782929-6.65646-11.3440604-6.65646H26.0903507c-4.8511082 0-9.08878 2.6713796-11.3226352 6.6192479-.5570543-1.6880774-1.4726981-2.171835-2.8450363-2.171835H4.70916491c.56494774.2322939.94045193 1.6937156.94045193 1.6937156l3.48215292 12.0939411c.40369519 1.5189313 1.65988634 2.3173006 3.08296834 2.3173006h3.3006028c2.3601509 3.2960923 6.221191 5.4476298 10.5750098 5.4476298h11.6744589c4.3526912 0 8.2137312-2.1515375 10.5750098-5.4476298h3.334432c1.423082 0 2.6792731-.7983693 3.0807131-2.3173006l3.4844082-12.0939411s.3743765-1.4614217.9404519-1.6937156h-7.2135144z"
        fill="#DA1710"
      />
      <path
        d="M39.7811431 30.4486831c-1.4456348 0-2.6161253 1.1716182-2.6161253 2.6161253 0 1.4456347 1.1704905 2.6161252 2.6161253 2.6161252 1.444507 0 2.6149976-1.1704905 2.6149976-2.6161252 0-1.4445071-1.1704906-2.6161253-2.6149976-2.6161253M24.6593753 30.4486831c-1.4456348 0-2.6161253 1.1716182-2.6161253 2.6161253 0 1.4456347 1.1704905 2.6161252 2.6161253 2.6161252 1.4445071 0 2.6161252-1.1704905 2.6161252-2.6161252 0-1.4445071-1.1716181-2.6161253-2.6161252-2.6161253"
        fill="#2A2E42"
      />
    </g>
  </Symbol>
);
