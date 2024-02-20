import { type Meta, type StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useOverlayTriggerState } from 'react-stately';

import { Button } from '../index.js';

import { BottomSheet } from './bottom-sheet.component.js';
import { BottomSheetProps } from './bottom-sheet.types.js';

const StoryBottomSheet = ({ children, state, ...props }: BottomSheetProps) => {
  const bottomSheetState = useOverlayTriggerState({});

  useEffect(() => {
    bottomSheetState.setOpen(state.isOpen);
  }, [state]);

  return (
    <>
      <Button onClick={bottomSheetState.open}> Open Bottom Sheet </Button>
      <BottomSheet {...props} state={bottomSheetState}>
        {children}
      </BottomSheet>
    </>
  );
};

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: StoryBottomSheet,
  tags: ['autodocs'],
  argTypes: {
    state: {
      description: 'The Bottom Sheet opening and closing state, should use OverlayTriggerState from react-stately',
      type: { name: 'other', value: 'OverlayTriggerState' },
    },
    children: { description: 'Body content of Bottom Sheet' },
    isDismissable: {
      description: 'Whether to close the modal when the user interacts outside it',
      type: { name: 'boolean' },
    },
    height: {
      description: 'Height of the Modal',
      type: { name: 'string' },
    },
    portalContainer: {
      description: 'Element where the modal will be rendered, by default it will be into the body',
      type: { name: 'other', value: 'Element' },
    },
    width: {
      description: 'Width of the Modal',
      type: { name: 'string' },
    },
    title: { description: 'Title for bottom sheet', type: { name: 'string' } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 */
export const DefaultState: Story = {
  args: {
    state: {
      close: () => {
        return;
      },
      setOpen: () => {
        return;
      },
      open: () => {
        return;
      },
      toggle: () => {
        return;
      },
      isOpen: false,
    },
    title: 'Heading',
    primaryLabel: 'Label',
    secondaryLabel: 'Label',
    primaryOnClick: () => null,
    secondaryOnClick: () => null,
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ullam atque dignissimos ab quaerat nobis rem a
        ad blanditiis laborum labore repellendus, vero nihil ducimus, aliquam culpa explicabo doloremque corporis.
      </p>
    ),
  },
};

/**
 * > No footer example
 */
export const NoFooter: Story = {
  args: {
    state: {
      close: () => {
        return;
      },
      setOpen: () => {
        return;
      },
      open: () => {
        return;
      },
      toggle: () => {
        return;
      },
      isOpen: false,
    },
    title: 'Heading',
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ullam atque dignissimos ab quaerat nobis rem a
        ad blanditiis laborum labore repellendus, vero nihil ducimus, aliquam culpa explicabo doloremque corporis.
      </p>
    ),
  },
};
