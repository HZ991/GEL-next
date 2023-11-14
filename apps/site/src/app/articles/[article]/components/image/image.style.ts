import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    base: 'relative mx-0 my-4',
    img: 'block',
    caption: 'typography-body-10 mt-2 text-muted',
  },
});
