import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  mainColor: {
    normal: '#8c9eff',
    lighter: '#c0cfff',
    darker: '#0029FF',
    carb: '#FAA0A0',
    protein: '#00D287',
    fat: '#FAF461',
  },

  flexbox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};
