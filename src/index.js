import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BackDropContextProvider } from "./Store/backDrop-Context";
import { UserContextProvider } from "./Store/User-Context";
import { QueryContextProvider } from "./Store/Query-Context";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BackDropContextProvider>
    <UserContextProvider>
      <QueryContextProvider>
        <Router>
          <App />
        </Router>
      </QueryContextProvider>
    </UserContextProvider>
  </BackDropContextProvider>
);
