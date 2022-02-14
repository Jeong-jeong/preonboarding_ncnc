import { Theme } from './theme';
import { CSSObject, CSSProp } from 'styled-components';

// @NOTE: theme의 속성들을 types 으로서 자동완성할 수 있게 해줌
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
