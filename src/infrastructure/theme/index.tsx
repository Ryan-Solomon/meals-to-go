import { colors } from './colors';
import { space, lineHeights } from './spacing';
import { sizes } from './sizes';
import { fonts, fontWeights, fontSizes } from './fonts';

export type TTheme = typeof theme;

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
