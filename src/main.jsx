import React from "react";
import ReactDOM from "react-dom/client";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
// Routing
import { BrowserRouter } from "react-router-dom";
// Styles
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import store from "./store";
import { Provider } from "react-redux";

import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
