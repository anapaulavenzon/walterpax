import React from "react";
import AppRoutes from "../src/routes/AppRouter";
import GlobalStyle from "./config/GlobalStyle";
import { ThemeProvider } from "styled-components";
const temas = {
  dark: {
    color: "#f5f5f5",
    backgroundColor: "black",
    primary: "#b61010",
  },
  light: {
    color: "black",
    backgroundColor: "#f5f5f5",
    primary: "rgba(8, 139, 107, 0.438)",
  },
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={temas.dark}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
