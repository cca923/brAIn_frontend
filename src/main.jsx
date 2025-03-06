import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.js";
import theme from "./styles/theme.js";
import "normalize.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
