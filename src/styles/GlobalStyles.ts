import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background-color: #272932;
    width: 100%;
    height: 100vh;

    section {
      width: 100%;
      height: 100vh;
    }
  }
`;
