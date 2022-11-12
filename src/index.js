import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import  ReactDOM from "react-dom";
import * as ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Router>
    <App />
  </Router>
);

// <Router.StrictMode>
// <HashRouter>
// <Router>
//   <App />
// </Router>
// </HashRouter>
// </Router.StrictMode>
