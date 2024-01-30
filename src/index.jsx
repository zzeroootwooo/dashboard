// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// app
import App from "@/app/App.jsx";
// providers
import { ProfileProvider } from "./app/providers/context/Profile/ProfileProvider";
// styles
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
