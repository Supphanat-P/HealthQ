import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataProvider } from "./context/DataContext.jsx";

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, Inter, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </ThemeProvider>
);
