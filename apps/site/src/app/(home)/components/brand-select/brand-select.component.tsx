import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/ui/icon';
import React, { useRef } from 'react';
import { AriaLinkOptions, mergeProps, useButton, useFocusRing, useSelect } from 'react-aria';
import { Item, ItemProps, useSelectState } from 'react-stately';

import { GELLogo } from '@/components/logos';

import { styles as brandSelectStyles } from './brand-select.styles';
import { type BrandSelectProps } from './brand-select.types';
import { ListBox } from './components/list-box';
import { Popover } from './components/popover';

export function BrandSelect(props: BrandSelectProps) {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = useRef(null);
  const popoverRef = useRef(null);
  const portalContainreRef = useRef<HTMLDivElement>(null);

  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);
  // Get props for the button based on the trigger props from useSelect

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();
  const styles = brandSelectStyles({ isFocusVisible, isOpen: state.isOpen });

  return (
    <div className={styles.base()}>
      <div {...labelProps} className={styles.label()}>
        {props.label}
      </div>

      <button {...mergeProps(buttonProps, focusProps)} ref={ref} className={styles.button()}>
        <div className={styles.textWrapper()}>
          <div className="flex w-full items-end gap-[0.625rem] overflow-hidden text-ellipsis py-2" {...valueProps}>
            <GELLogo className="w-[2.8125rem] shrink-0" />
            <span className="mb-[-0.2rem] shrink truncate leading-4">Design System</span>
          </div>
        </div>
        <div aria-hidden="true" className={styles.iconWrapper()}>
          {state.isOpen ? <ExpandLessIcon className="text-gel-link" /> : <ExpandMoreIcon className="text-gel-link" />}
        </div>
      </button>
      <div className="-mx-4" ref={portalContainreRef} />
      {state.isOpen && (
        <Popover
          portalContainer={portalContainreRef.current || undefined}
          isNonModal
          containerPadding={0}
          popoverRef={popoverRef}
          shouldFlip={false}
          state={state}
          triggerRef={ref}
          placement="bottom start"
          className={styles.popover()}
        >
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
}
BrandSelect.Option = Item as (props: ItemProps<AriaLinkOptions> & AriaLinkOptions & { href?: string }) => JSX.Element;
