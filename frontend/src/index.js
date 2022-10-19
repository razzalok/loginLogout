import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContactFormContextProvider } from "./context/ContactFormContext";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ContactFormContextProvider>
      <App />
    </ContactFormContextProvider>
  </AuthContextProvider>
);
