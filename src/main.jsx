import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <Router>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
