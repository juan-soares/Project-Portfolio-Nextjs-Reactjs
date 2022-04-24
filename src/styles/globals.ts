import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behaviour: smooth;
  }

  html::-webkit-scrollbar {
    width: 10px;
  }

  html::-webkit-scrollbar-track {
    background: #000000;
  }

  html::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 0px;
    border: 0px solid #ffffff;
  }

  body{
    min-height: 100vh;
    width: 100%;
    color: ${theme.color.letters};
    font-family: ${theme.fontFamily.paragraph};       
  }

  a:link{
    text-decoration: none;
  }

  h1{
    color: yellow;
    font-size: 60px;
    font-family: ${theme.fontFamily.title};
    padding-bottom: 50px;
  }

  p{
    text-align: justify;
    font-size: 16pt;
    padding-bottom: 20px;

    &:first-letter {
      font-size: 20pt;
    }
  }

  ul{
    list-style-type: none;
  }
`;
