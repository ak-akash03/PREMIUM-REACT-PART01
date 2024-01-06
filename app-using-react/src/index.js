import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Akash from "./akash";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Akash />
  </React.StrictMode>
);

