import { render } from '@testing-library/react';

import { styles as containerStyles } from './components/container/container.styles.js';
import { styles as itemStyles } from './components/item/item.styles.js';
import { Grid } from './grid.component.js';
import { styles as gridStyles } from './grid.styles.js';

import { Container, Item } from './index.js';

describe('Grid', () => {
  it('renders the Grid component', () => {
    const { container } = render(<Grid />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Grid style correctly', () => {
    const style = gridStyles();
    expect(style).toBe(
      'grid h-auto grid-flow-row auto-rows-[minmax(32px,auto)] grid-cols-[repeat(12,_1fr)] gap-2 xsl:gap-4',
    );
  });

  it('renders the Container component', () => {
    const { container } = render(<Container />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Container style correctly', () => {
    const style = containerStyles();
    expect(style).toBe('mx-auto box-border w-full max-w-container px-4 xsl:px-5 sm:px-6 md:px-8 lg:px-10');
  });

  it('renders the Item component', () => {
    const { container } = render(<Item />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Item style correctly', () => {
    const style = itemStyles({ span: 2 });
    expect(style).toBe('col-span-2');
  });
});
