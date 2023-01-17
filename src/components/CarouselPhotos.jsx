import React from "react";

import Foto1 from "../assets/KidKardBanner.jpeg";
import Foto2 from "../assets/Foto3.jpeg";
import Foto3 from "../assets/Foto4.jpeg";

function CarouselPhotos() {
  return (
    <div className="w-full h-full ">
      <h2 className="font-bold text-2xl text-black my-5">Fotos del Producto</h2>
      <div className="grid grid-cols-2 gap-5 m-auto p-24 justify-center max-sm:grid-cols-1">
        <div>
          <img
            src={Foto1}
            alt="Foto 1 de Kid Kard"
            className="w-64 h-96 mx-auto"
          />
        </div>

        <img
          src={Foto2}
          alt="Foto 2 de Kid Kard"
          className="w-64 h-96 mx-auto"
        />
        <img
          src={Foto3}
          alt="Foto 2 de Kid Kard"
          className="w-64 h-96 mx-auto"
        />
      </div>
    </div>
  );
}

export default CarouselPhotos;
