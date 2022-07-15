import "./index.css";
import App from "./App";
import React from "react";
import store from "./Store/Store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
