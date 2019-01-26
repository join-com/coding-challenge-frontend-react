import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:900|Open+Sans:400,700,800');
  @import "../../node_modules/normalize.css/normalize.css";
  
  body, html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    background: #FAFAFA;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
      color: #333333;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;


export const Theme = {
  primaryColor: '#663399',
  clearColor: '#FAFAFA',
  baseColor: '#333333',
  mutedColor: '#999999',

  fontXLarge: '4em',
  fontLarge: '2em',
  fontMedium: '1em',
  fontSmall: '0.8em',
};
