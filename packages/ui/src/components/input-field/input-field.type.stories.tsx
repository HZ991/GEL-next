import { type Meta, StoryFn, type StoryObj } from '@storybook/react';

import { SearchIcon, VisibilityIcon } from '../icon/index.js';
import { Button, Input, Select, Textarea } from '../index.js';

import { InputField } from './input-field.component.js';

const meta: Meta<typeof InputField> = {
  title: 'Example/InputField/Types',
  component: InputField,
  tags: ['autodocs'],
  decorators: [(Story: StoryFn) => <Story />],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Text Beforoe story example
 */
export const TextBeforeStory: Story = {
  args: {},
  render: () => {
    return (
      <InputField label="Text before" hint="I am a hint" supportingText="I am supporting text" before="$AUD">
        <Input />
      </InputField>
    );
  },
};

/**
 * > Text Beforoe story example
 */
export const TextAfterStory: Story = {
  args: {},
  render: () => {
    return (
      <InputField label="Text after" hint="I am a hint" supportingText="I am supporting text" after="Text">
        <Input />
      </InputField>
    );
  },
};

/**
 * > Text After and Beforoe story example
 */
export const TextAfterAndBeforeStory: Story = {
  args: {},
  render: () => {
    return (
      <InputField
        label="Text after"
        hint="I am a hint"
        supportingText="I am supporting text"
        before="$AUD"
        after="Text"
      >
        <Input />
      </InputField>
    );
  },
};

/**
 * > Textarea
 */
export const IconAddOnStory: Story = {
  args: {},
  render: () => {
    return (
      <>
        <InputField
          label="Icon before"
          hint="I am a hint"
          supportingText="I am supporting text"
          before={{ icon: SearchIcon }}
        >
          <Input />
        </InputField>
        <InputField
          label="Icon after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={{ icon: SearchIcon }}
        >
          <Input />
        </InputField>
        <InputField
          label="Icon after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={{ icon: SearchIcon }}
          before={{ icon: SearchIcon }}
        >
          <Input />
        </InputField>
      </>
    );
  },
};

/**
 * > Icons in buttons
 */
export const IconInButtonsOnStory: Story = {
  args: {},
  render: () => {
    return (
      <>
        <InputField
          label="Icon button before"
          hint="I am a hint"
          supportingText="I am supporting text"
          before={{ inset: true, element: <Button look="link" iconAfter={VisibilityIcon} iconColor="muted" /> }}
        >
          <Input />
        </InputField>
        <InputField
          label="Icon button after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={{ inset: true, element: <Button look="link" iconAfter={VisibilityIcon} iconColor="muted" /> }}
        >
          <Input />
        </InputField>
        <InputField
          label="Icon button before and after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={{ inset: true, element: <Button look="link" iconAfter={VisibilityIcon} iconColor="muted" /> }}
          before={{ inset: true, element: <Button look="link" iconAfter={VisibilityIcon} iconColor="muted" /> }}
        >
          <Input />
        </InputField>
      </>
    );
  },
};

/**
 * > Button add ons
 */
export const ButtonAddOnStory: Story = {
  args: {},
  render: () => {
    return (
      <>
        <InputField
          label="Button before"
          hint="I am a hint"
          supportingText="I am supporting text"
          before={<Button>Check</Button>}
        >
          <Input />
        </InputField>
        <InputField
          label="Button after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={<Button>Check</Button>}
        >
          <Input />
        </InputField>
        <InputField
          label="Button before and after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={<Button>Check</Button>}
          before={<Button>Check</Button>}
        >
          <Input />
        </InputField>
        <InputField
          label="Primary button after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={<Button look="primary">Check</Button>}
        >
          <Input />
        </InputField>
        <InputField
          label="Faint button after"
          hint="I am a hint"
          supportingText="I am supporting text"
          after={<Button look="faint">Check</Button>}
        >
          <Input />
        </InputField>
      </>
    );
  },
};

/**
 * > Select add ons
 */
export const SelectAddOnStory: Story = {
  args: {},
  render: () => {
    return (
      <InputField
        label="Select"
        hint="I am a hint"
        supportingText="I am supporting text"
        before={
          <Select>
            <option>Select</option>
          </Select>
        }
        after={
          <Select>
            <option>Select</option>
          </Select>
        }
      >
        <Input />
      </InputField>
    );
  },
};

/**
 * > Textarea
 */
export const TextAreaStory: Story = {
  args: {},
  render: () => {
    return (
      <InputField label="Text after" hint="I am a hint" supportingText="I am supporting text">
        <Textarea />
      </InputField>
    );
  },
};