import React from "react";
import { Link } from "react-router-dom";

import kidkardbanner from "../assets/KidKardBanner.jpeg";

function BannerHome() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-16 pb-4 md:pt-24 md:pb-8">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter my-8"
              data-aos="zoom-y-out"
            >
              El juego de cartas que te permite una mayor{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-red-400">
                interacción
              </span>{" "}
              con tus hijos y{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-red-400">
                reducir
              </span>{" "}
              el uso de dispositivos móviles{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 my-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Kidkard te permite tener una mayor conexión e interacción con
                tus hijos, además de reducir el uso de dispositivos electrónicos
                mientras se entretienen entre familia.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    to="/ver-producto"
                  >
                    Ver el producto
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    to="beneficios"
                  >
                    Conocer mas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={kidkardbanner}
                  width="768"
                  height="432"
                  alt="Foto de KidKard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHome;
