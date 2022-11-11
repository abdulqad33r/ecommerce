import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./Components/Context/StateContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateContext>
      <React.StrictMode>
        <Toaster />
        <App />
      </React.StrictMode>
    </StateContext>
  </BrowserRouter>
);
