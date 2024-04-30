import { tv } from 'tailwind-variants';

export const styles = tv(
  {
    base: 'mx-auto box-border w-full',
    variants: {
      fixed: {
        true: 'px-3 xsl:max-w-xsl xsl:px-5 sm:max-w-sm sm:px-6 md:max-w-md md:px-7 lg:max-w-lg lg:px-10 xl:px-0',
        false: 'max-w-container px-4 xsl:px-5 sm:px-6 md:px-8 lg:px-10',
      },
    },
  },
  { responsiveVariants: ['xsl', 'sm', 'md', 'lg', 'xl'] },
);
