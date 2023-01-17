import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import FeaturesContainer from "../components/FeaturesContainer";
import Opinions from "../components/Opinions";
import OpinionForm from "../components/OpinionForm";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <BannerHome />
        <FeaturesContainer />
        <Opinions />
        <OpinionForm />
      </main>
    </div>
  );
}

export default Home;
