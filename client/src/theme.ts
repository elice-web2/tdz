import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  mainColor: {
    normal: '#8c9eff',
    lighter: '#c0cfff',
    darker: '#5870cb',
  },

  flexbox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};
