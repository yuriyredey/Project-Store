import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import  ReactDOM from "react-dom";
import './index.scss';
import 'macro-css';
import App from './App';

ReactDOM.render(
  <Router.StrictMode>
    <HashRouter>
    <Router>
      <App />
    </Router>
    </HashRouter>
  </Router.StrictMode>,
  document.getElementById('root'),
);

