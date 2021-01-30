import 'styled-components';
import { TTheme } from './infrastructure/theme';
import { TColors } from './infrastructure/theme/colors';
import { TFonts, TFontSizes, TFontWeights } from './infrastructure/theme/fonts';
import { TSizes } from './infrastructure/theme/sizes';
import { TLineHeights, TSpace } from './infrastructure/theme/spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColors;
    space: TSpace;
    lineHeights: TLineHeights;
    sizes: TSizes;
    fonts: TFonts;
    fontSizes: TFontSizes;
    fontWeights: TFontWeights;
  }
}
