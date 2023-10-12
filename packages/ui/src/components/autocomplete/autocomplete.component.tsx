import * as React from 'react';
import { useButton, useComboBox, useFilter, useSearchField } from 'react-aria';
import { Item, useComboBoxState, useSearchFieldState } from 'react-stately';

import { ClearIcon } from '../icon/index.js';
import { ErrorMessage, FormHint, FormLabel } from '../index.js';

import { styles as autocompleteStyles } from './autocomplete.styles.js';
import { type AutocompleteProps } from './autocomplete.types.js';
import { ListBox, Popover } from './components/index.js';

export function Autocomplete<T extends object>({
  size = 'medium',
  invalid = false,
  isDisabled,
  footer,
  portalContainer,
  errorMessage,
  hintMessage,
  ...props
}: AutocompleteProps<T>) {
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({ isDisabled, ...props, defaultFilter: contains });
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const { inputProps, listBoxProps, labelProps, descriptionProps, errorMessageProps } = useComboBox(
    {
      ...props,
      isDisabled,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state,
  );

  const styles = autocompleteStyles({
    isDisabled,
    isFocused: state.isFocused,
    size,
    invalid,
  });
  // Get props for the clear button from useSearchField
  const searchProps = {
    label: props.label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v),
  };

  const searchState = useSearchFieldState(searchProps);
  const { clearButtonProps } = useSearchField(
    { ...searchProps, 'aria-label': props['aria-label'], 'aria-labelledby': props['aria-labelledby'] },
    searchState,
    inputRef,
  );
  const clearButtonRef = React.useRef(null);
  const { buttonProps } = useButton(clearButtonProps, clearButtonRef);
  const outerRef = React.useRef(null);

  return (
    <div className={styles.base()}>
      <FormLabel {...labelProps}>{props.label}</FormLabel>
      {hintMessage && <FormHint {...descriptionProps}>{hintMessage}</FormHint>}
      {errorMessage && <ErrorMessage {...errorMessageProps} message={errorMessage} />}

      <div ref={outerRef} className={styles.outerWrapper()}>
        <input {...inputProps} ref={inputRef} className={styles.input()} />

        <button
          {...buttonProps}
          ref={clearButtonRef}
          style={{ visibility: state.inputValue !== '' ? 'visible' : 'hidden' }}
          className={styles.clearButton()}
        >
          <ClearIcon aria-hidden="true" color="muted" size="small" />
        </button>
      </div>

      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={outerRef}
          state={state}
          isNonModal
          placement="bottom start"
          portalContainer={portalContainer}
        >
          <ListBox {...listBoxProps} autoFocus={listBoxProps.autoFocus as any} listBoxRef={listBoxRef} state={state} />
          {footer && <div className="border-t-border border-t px-3 py-2">{footer}</div>}
        </Popover>
      )}
    </div>
  );
}

Autocomplete.Item = Item;
