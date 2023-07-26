import { type BrandConfig } from '../index.js';
import { generateColorTints } from '../utils/generate-color-tints.js';

export const theme: BrandConfig = {
  code: 'BSA',
  colors: generateColorTints({
    background: '#F3F4F4',
    border: '#D3D4D5',
    borderDark: '#909396',
    focus: '#C26F9D',
    heading: '#002F6C',
    hero: '#002F6C',
    light: '#FAFAFA',
    link: '#D81B2B',
    muted: '#6A6E72',
    neutral: '#6A6E72',
    pop: '#00ADBD', //Bight
    primary: '#D81B2B',
    text: '#333',
  }),
  brandFont: 'Aller',
  name: 'BankSA',
};
