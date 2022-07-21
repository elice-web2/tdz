import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: {
      normal: string;
      lighter: string;
      darker: string;
      carb: string;
      protein: string;
      fat: string;
    };

    flexbox: (...args) => string;
  }
}
