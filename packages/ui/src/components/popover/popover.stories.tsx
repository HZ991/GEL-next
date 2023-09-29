import { type Meta, StoryFn, type StoryObj } from '@storybook/react';

import { HelpIcon } from '../icon/index.js';

import { Popover } from './popover.component.js';

const popoverContent =
  'Small overlays of content for housing secondary information. These are often used to provide explanatory information for complex ideas.';

const meta: Meta<typeof Popover> = {
  title: 'Example/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <div className="p-[200px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'center',
  },
  args: {
    content: popoverContent,
    heading: 'Test Heading',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 */
export const DefaultStory: Story = {
  args: {
    children: 'Click Me',
  },
};

/**
 * > Using icon as trigger
 */
export const PopoverIconTrigger: Story = {
  args: {
    icon: () => <HelpIcon color="hero" />,
  },
};

/**
 * > Default open
 */
export const DefaultOpenPopover: Story = {
  args: {
    children: 'Click Me',
    open: true,
  },
};

/**
 * > No heading
 */
export const PopoverNoHeading: Story = {
  args: {
    children: 'Click Me',
    open: true,
    heading: undefined,
  },
};

/**
 * > Top and bottom popover
 */
export const PopoverPlacement = () => (
  <div>
    <Popover className="mr-3" heading="Heading" placement="top" content={popoverContent} open>
      Top Popover
    </Popover>
    <Popover placement="bottom" heading="Heading" content={popoverContent} open>
      Bottom Popover
    </Popover>
  </div>
);