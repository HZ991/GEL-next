import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    slots: {
      base: 'group/panel mb-4 overflow-hidden rounded-[0.1875rem] border border-hero',
      header: 'px-2 py-[0.625rem] sm:px-4',
    },
    variants: {
      look: {
        hero: {
          header: 'bg-hero text-white',
        },
        faint: {
          base: 'border-border',
          header: 'border-0 border-b border-b-border bg-background text-text',
        },
      },
    },
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);
