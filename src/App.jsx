import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import CarouselPhotos from "./components/CarouselPhotos";
import FeaturesContainer from "./components/FeaturesContainer";
import OpinionForm from "./components/OpinionForm";
import Opinions from "./components/Opinions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/ver-producto" element={<CarouselPhotos />}></Route>
      <Route path="/beneficios" element={<FeaturesContainer />}></Route>
      <Route path="/acerca-del-producto" element={<Opinions />}></Route>
      <Route path="/enviar-opinion" element={<OpinionForm />}></Route>
    </Routes>
  );
}

export default App;
