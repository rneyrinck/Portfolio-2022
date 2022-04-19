import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router";

ReactDOM.render(
  <BrowserRouter basename="Portfolio-2022">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
