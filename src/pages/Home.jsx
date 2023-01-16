import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <BannerHome />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
