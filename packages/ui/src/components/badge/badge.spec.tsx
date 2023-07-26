import { render } from '@testing-library/react';

import { Badge } from './badge.component.js';
import { styles } from './badge.styles.js';

describe('Badge', () => {
  it('renders the component', () => {
    const { container } = render(<Badge />);
    expect(container).toBeInTheDocument();
  });
  it('renders the style correctly', () => {
    const style = styles({ color: 'primary', type: 'pill' });
    // TODO: use some variants for test
    expect(style).toBe(
      'inline-block whitespace-nowrap text-center bg-primary text-white typography-body-10 rounded-xl px-[0.4375rem] py-[0.25rem] font-bold leading-none',
    );
  });
});