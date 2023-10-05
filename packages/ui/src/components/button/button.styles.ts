import { tv } from 'tailwind-variants';

/**
 * Current GEL design not using design tokens in some cases. Because of that, we need specify numeric values such as pb-[0.25rem] for spacing
 */
export const styles = tv(
  {
    slots: {
      base: 'inline-flex items-center justify-center rounded leading-[1.5] transition-[background] disabled:pointer-events-none disabled:opacity-50 group-[.add-on-after]:rounded-l-none group-[.add-on-before]:rounded-r-none',
      iconBefore: '',
      iconAfter: '',
      dropdown: 'ml-[0.4em]',
      text: 'overflow-hidden text-ellipsis',
    },
    variants: {
      size: {
        small: { base: 'typography-body-10 px-2 pb-[0.25rem] pt-[0.1875rem]' },
        medium: { base: 'typography-body-9 px-2 py-[0.3125rem]' },
        large: { base: 'typography-body-9 px-[0.9375rem] py-[0.5rem]' },
        xlarge: { base: 'typography-body-8 px-3 pb-[0.625rem] pt-[0.5625rem]' },
      },
      look: {
        primary: { base: 'border-primary bg-primary hover:bg-primary-70 active:bg-primary-50 border text-white' },
        hero: { base: 'border-hero bg-hero hover:bg-hero-70 active:bg-hero-50 border text-white' },
        faint: { base: 'border-border bg-light text-muted border hover:bg-white active:bg-white' },
        link: { base: 'text-link underline' },
      },
      soft: {
        true: { base: 'bg-white' },
      },
      block: {
        true: { base: 'flex w-full' },
      },
      justify: {
        true: { base: 'justify-between' },
      },
      hasChildren: {
        true: '',
      },
      isFocusVisible: {
        true: { base: 'focus-outline' },
        false: { base: 'outline-none' },
      },
    },
    compoundSlots: [
      {
        slots: ['base'],
        look: 'primary',
        soft: true,
        className: 'text-text hover:text-white',
      },
      {
        slots: ['base'],
        look: 'hero',
        soft: true,
        className: 'text-text hover:text-white',
      },
      {
        slots: ['base'],
        look: 'faint',
        soft: true,
        className: 'hover:bg-light active:bg-light',
      },
      {
        slots: ['iconBefore'],
        hasChildren: true,
        className: 'mr-[0.4em]',
      },
      {
        slots: ['iconAfter'],
        hasChildren: true,
        className: 'ml-[0.4em]',
      },
    ],
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);
