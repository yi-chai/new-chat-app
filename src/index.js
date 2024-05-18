import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
