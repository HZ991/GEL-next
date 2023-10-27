'use client';

import { clsx } from 'clsx';
import React from 'react';

import { Pictogram } from '../../pictogram.component.js';
import { fill } from '../../pictogram.styles.js';
import { type PictogramProps } from '../../pictogram.types.js';

export function NoodlesPictogram({
  mode = 'duo',
  viewBoxWidth = 78,
  viewBoxHeight = 78,
  'aria-label': ariaLabel = 'Noodles',
  copyrightYear = '2021',
  className,
  ...props
}: PictogramProps) {
  return (
    <Pictogram
      className={clsx('h-13 w-13', className)}
      viewBoxWidth={viewBoxWidth}
      viewBoxHeight={viewBoxHeight}
      aria-label={ariaLabel}
      copyrightYear={copyrightYear}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          className={fill({ mode, highlight: true })}
          d="M15.01 13.728c.027-.6.456-1.062.963-1.035l50.164 2.72c1.012.011 1.846.754 1.863 1.66.016.905-.79 1.63-1.8 1.618a2.212 2.212 0 0 1-.204-.013l-50.139-3.612c-.5-.036-.882-.545-.856-1.14l.01-.198z"
        />
        <path
          className={fill({ mode, outline: true })}
          d="M49.08 61.198l-.676.367v5.63h-25.37v-5.63l-.676-.367C13.658 56.472 8.046 47.464 7.6 37.581h56.24c-.448 9.884-6.06 18.891-14.76 23.617zM71.586 38.2c-.579-.596-4.555-2.454-6.168-2.947-.366-.11-.857-.26-1.276-.262h-28.71c-.195-1.35-.673-2.205-1.109-2.973-.481-.847-.86-1.515-.86-2.983 0-1.469.379-2.138.86-2.984.562-.99 1.201-2.11 1.201-4.268 0-2.156-.64-3.278-1.2-4.267-.482-.846-.862-1.512-.862-2.98 0-1.466.38-2.133.861-2.977.562-.988 1.201-2.108 1.201-4.264 0-.715-.577-1.295-1.288-1.295-.713 0-1.289.58-1.289 1.295 0 1.466-.38 2.133-.86 2.976-.563.99-1.201 2.11-1.201 4.266 0 2.155.638 3.276 1.2 4.265.48.845.861 1.514.861 2.98 0 1.47-.38 2.138-.86 2.984-.563.99-1.201 2.111-1.201 4.269 0 2.157.638 3.278 1.2 4.268.31.547.578 1.024.73 1.688h-3.94c-.194-1.35-.672-2.205-1.11-2.973-.48-.847-.86-1.515-.86-2.983 0-1.469.38-2.138.86-2.984.563-.99 1.201-2.11 1.201-4.268 0-2.156-.638-3.278-1.2-4.267-.482-.846-.861-1.512-.861-2.98 0-1.466.38-2.133.86-2.977.563-.988 1.201-2.108 1.201-4.264A1.29 1.29 0 0 0 27.68 6c-.711 0-1.288.58-1.288 1.295 0 1.466-.38 2.133-.861 2.976-.563.99-1.201 2.11-1.201 4.266 0 2.155.638 3.276 1.2 4.265.482.845.862 1.514.862 2.98 0 1.47-.38 2.138-.861 2.984-.563.99-1.201 2.111-1.201 4.269 0 2.157.638 3.278 1.2 4.268.312.547.58 1.024.73 1.688h-3.94c-.194-1.35-.672-2.205-1.109-2.973-.481-.847-.86-1.515-.86-2.983 0-1.469.379-2.138.86-2.984.563-.99 1.2-2.11 1.2-4.268 0-2.156-.637-3.278-1.2-4.267-.481-.846-.86-1.512-.86-2.98 0-1.466.379-2.133.86-2.977.563-.988 1.2-2.108 1.2-4.264 0-.715-.576-1.295-1.288-1.295-.712 0-1.288.58-1.288 1.295 0 1.466-.38 2.133-.86 2.976-.563.99-1.201 2.11-1.201 4.266 0 2.155.638 3.276 1.2 4.265.482.845.861 1.514.861 2.98 0 1.47-.38 2.138-.86 2.984-.563.99-1.201 2.111-1.201 4.269 0 2.157.638 3.278 1.2 4.268.312.547.578 1.024.73 1.688H6.976c-.528 0-1.045.218-1.416.6A1.975 1.975 0 0 0 5 37.018c.25 10.795 6.152 20.717 15.457 26.08v4.494c0 .837.475 1.558 1.163 1.927C23.57 70.981 28.144 72 28.203 72h26.159a2.19 2.19 0 0 0 2.182-2.194v-4.492C65.854 59.946 71.756 50.017 72 39.216c.006-.496-.01-.584-.413-1.016z"
        />
        <path
          className={fill({ mode, highlight: true })}
          d="M15.001 10.642a.932.932 0 0 1 .867-.982l50.125-2.958c1.009-.096 1.903.449 1.999 1.217.095.768-.644 1.47-1.652 1.566-.067.006-.136.01-.202.01L15.96 11.691a.919.919 0 0 1-.95-.88l-.009-.17z"
        />
      </g>
    </Pictogram>
  );
}
