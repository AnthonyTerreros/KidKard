import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
