import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import HouseContextProvider from "./components/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HouseContextProvider>
    <BrowserRouter>
    <React.StrictMode> 
      <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>
);
