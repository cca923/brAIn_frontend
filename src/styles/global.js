import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-color: #a29bfe #a29bfe;
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #a29bfe;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #a29bfe;
    border-radius: 20px;
    border: 3px solid #a29bfe;
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
