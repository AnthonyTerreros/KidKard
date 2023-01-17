import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>
);
