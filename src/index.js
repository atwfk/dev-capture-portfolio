import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));
