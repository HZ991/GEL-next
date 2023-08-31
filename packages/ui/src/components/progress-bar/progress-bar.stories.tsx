import { type Meta, StoryFn, type StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { Button } from '../button/index.js';

import { ProgressBar } from './progress-bar.component.js';

const meta: Meta<typeof ProgressBar> = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <div className="p-3">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 */
export const DefaultStory: Story = {
  args: {
    value: 50,
    look: 'default',
  },
};

/**
 * > Skinny example
 */
export const ProgressBarSkinny: Story = {
  args: {
    value: 50,
    look: 'skinny',
  },
};

/**
 * > No label example
 */
export const ProgressBarNoLabel: Story = {
  args: {
    value: 50,
    look: 'default',
    noLabel: true,
  },
};

/**
 * Example of Progress Bar controlled by buttons
 */
export const ProgressBarControlled = () => {
  const [barValue, setBarValue] = useState(0);
  const handleProgress = useCallback(
    (calc: number) => {
      const progress = barValue + calc;
      if (progress > 100) return setBarValue(100);
      if (progress < 0) return setBarValue(0);
      return setBarValue(progress);
    },
    [barValue],
  );
  return (
    <>
      <h2 className="typography-body-9 mb-1 font-bold">Default</h2>
      <ProgressBar value={barValue} className="mb-2" />
      <h2 className="typography-body-9 mb-1 font-bold">Skinny</h2>
      <ProgressBar look="skinny" value={barValue} className="mb-2" />
      <div className="flex space-x-2">
        <Button soft onClick={() => handleProgress(-1)}>
          -1%
        </Button>
        <Button soft onClick={() => handleProgress(-10)}>
          -10%
        </Button>
        <Button soft onClick={() => handleProgress(+1)}>
          +1%
        </Button>
        <Button soft onClick={() => handleProgress(+10)}>
          +10%
        </Button>
      </div>
    </>
  );
};