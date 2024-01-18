import { type Meta, StoryFn, type StoryObj } from '@storybook/react';

import { Button } from '../index.js';

import { Header } from './header.component.js';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story: StoryFn) => <Story />],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * > Default usage example
 */
export const DefaultStory: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example with a button on the right
 */
export const RightButton: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header brand={brand === 'btfg' ? 'wbc' : brand} {...rest}>
          <Button look="faint" size={{ initial: 'small', sm: 'medium' }} soft onClick={() => alert('clicked')}>
            Sign Out
          </Button>
        </Header>
      </>
    );
  },
};

/**
 * > Example of logo centering when XSL
 */
export const CenterAtXS: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header logoCenter brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example of logo with onClick
 */
export const LogoOnClick: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        {/* eslint-disable-next-line no-console */}
        <Header logoOnClick={() => console.log('clicked')} brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example of header with skiplink
 */
export const LogoWithSkipLink: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header skipToContentId="#" brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example fixed header. Does not show correctly in Docs view as it will show how it looks when scrolled, check specifc story for non-scrolled view
 */
export const Fixed: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <div className="h-10">
        <Header fixed brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </div>
    );
  },
};

/**
 * > Example of header with arrow button
 */
export const WithArrow: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header leftIcon="arrow" brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example of header with arrow button with onClick
 */
export const WithArrowOnClick: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header
          leftIcon="arrow"
          // eslint-disable-next-line no-console
          leftOnClick={() => console.log('clicked')}
          brand={brand === 'btfg' ? 'wbc' : brand}
          {...rest}
        />
      </>
    );
  },
};

/**
 * > Example of header with hamburger (only visible below xsl)
 */
export const WithHamburger: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header leftIcon="hamburger" brand={brand === 'btfg' ? 'wbc' : brand} {...rest} />
      </>
    );
  },
};

/**
 * > Example of header with hamburger (only visible below xsl) with onClick
 */
export const WithHamburgerOnClick: Story = {
  render: ({ brand: _, ...rest }, { globals: { theme } }) => {
    const brand = theme ? theme.toLowerCase() : 'wbc';
    return (
      <>
        <Header
          leftIcon="hamburger"
          // eslint-disable-next-line no-console
          leftOnClick={() => console.log('clicked')}
          brand={brand === 'btfg' ? 'wbc' : brand}
          {...rest}
        />
      </>
    );
  },
};
