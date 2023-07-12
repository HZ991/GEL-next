import { type SVGProps, Svg } from './Svg.js';

export const PieChartIcon = ({ 'aria-label': ariaLabel = 'Pie Chart', copyrightYear = '2020', ...props }: SVGProps) => (
  <Svg aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13,0 C18.8434819,0.482903868 23.4975482,5.14094692 23.9599991,11 L13,11 L13,0 Z M0,11.9794279 C0,5.67797979 4.84046948,0.509022045 11,0 L11,13.0222864 L23.9554671,13.0222864 C23.4278192,19.1727741 18.2766744,24 12,24 C5.372583,24 0,18.6182066 0,11.9794279 Z"
    />
  </Svg>
);
