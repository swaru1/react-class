import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {InputContextProvider} from "./Context/InputContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <InputContextProvider>
    <App/>
  </InputContextProvider>
);
