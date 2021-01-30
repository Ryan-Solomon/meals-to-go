import 'styled-components';
import { TTheme } from './infrastructure/theme';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    theme: TTheme;
  }
}
