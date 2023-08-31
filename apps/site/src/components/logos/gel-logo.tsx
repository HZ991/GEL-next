import { clsx } from 'clsx';

export function GELLogo({ className, ...props }) {
  return (
    <span className={clsx('inline-block h-3 w-[45px]', className)} {...props}>
      <svg
        viewBox="0 0 45 18"
        fill="none"
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GEL"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 9.0977V8.90267C0 3.58565 3.9039 0 9.1501 0C13.2742 0 16.934 1.8782 17.2756 6.41472H12.3225C12.0784 4.7805 11.0288 3.92677 9.17477 3.92677C6.71035 3.92677 5.22153 5.82963 5.22153 8.9759V9.17093C5.22153 12.0004 6.27077 14.1954 9.29663 14.1954C11.7368 14.1954 12.6638 12.9509 12.7617 11.561H9.49212V8.07323H17.6905V10.2197C17.6905 14.6587 14.7869 18 9.1501 18C3.22061 18 0 14.3172 0 9.0977ZM19.1549 0.268756H31.209V4.12192H24.1327V7.12211H29.7692V10.6831H24.1327V13.8537H31.5993V17.7072H19.1549V0.268756ZM38.1393 0.268756H33.1129V17.7072H44.7278V13.8294H38.1393V0.268756Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
