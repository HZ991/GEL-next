'use client';

import React from 'react';

import { Button } from '../../../../../button/index.js';
import { useModalDialogContext } from '../../modal-dialog.component.js';

import { styles as modalFooterStyles } from './modal-dialog-footer.styles.js';
import { type ModalDialogFooterProps } from './modal-dialog-footer.types.js';

export function ModalDialogFooter({
  className,
  primaryLabel,
  primaryOnClick,
  secondaryLabel,
  secondaryOnClick,
  ...props
}: ModalDialogFooterProps) {
  const { size } = useModalDialogContext();
  const styles = modalFooterStyles({ size });
  return (
    <div className={styles.base({ className })} {...props}>
      <Button look="primary" size="large" className={styles.primaryBtn()} onClick={primaryOnClick}>
        {primaryLabel}
      </Button>
      {secondaryLabel && (
        <Button look="link" size="large" className={styles.secondaryBtn()} onClick={secondaryOnClick}>
          {secondaryLabel}
        </Button>
      )}
    </div>
  );
}
