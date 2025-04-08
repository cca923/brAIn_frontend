import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f6fa;
    color: #333;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }  
`;

export default GlobalStyle;
