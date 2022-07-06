import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: {
      normal: string;
      lighter: string;
      darker: string;
    };

    flexbox: (...args) => string;
  }
}
