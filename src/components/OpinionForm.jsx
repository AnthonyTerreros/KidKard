import React from "react";
import Foto3 from "../assets/Foto3.jpeg";

function OpinionForm() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}

          <div className="max-w-3xl mx-auto text-center pb-2 md:pb-4">
            <h2 className="h1 mb-4 font-extrabold text-2xl">
              Danos tu opinión
            </h2>
          </div>

          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img
                className="relative"
                src={Foto3}
                width="300"
                height="300"
                alt="Foto 3 Kid Kard"
              />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2 text-4xl font-bold">
                  Producto en proceso de lanzamiento
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Estamos validando si es factible lanzar este producto al
                  mercado. Te agradeceríamos si nos das tu opinión acerca del
                  producto.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your email…"
                      aria-label="Your email…"
                    />
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      href="#0"
                    >
                      Subscribe
                    </a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">
                    Toda la información recolectada será usada para mejorar
                    nuestro producto.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpinionForm;
