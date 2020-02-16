import { createGlobalStyle } from 'styled-components';

import theme, { darken } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${darken(theme.mainColor, 0)};
  }
`;

export default GlobalStyle;
