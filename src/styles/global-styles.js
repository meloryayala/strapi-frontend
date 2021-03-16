import {createGlobalStyle, css} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    ${({theme}) => css`
      background-color: ${theme.colors.lightBg};
    `}
    font-family: 'Inter','Roboto', sans-serif;
    font-size: 1.6rem;
  }
`;