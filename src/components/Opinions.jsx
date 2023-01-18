import React from "react";
import Opinion1 from "../assets/Opinion1.jpeg";

function Opinions() {
  return (
    <section className="relative mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h1 mb-4 font-extrabold text-2xl">
              Acerca del Producto
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Conoce la opinión de algunos de los perfiles de clientes que
              entrevistamos, para validar el producto.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute -top-16 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img
                    className="relative"
                    src={Opinion1}
                    width="300"
                    height="145"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Es la primera vez que veo un juego que me permita conectar
                  más con mi hijo. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Madre de Familia
                </cite>
                <div className="text-gray-600">
                  <span>Madre de Familia</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @Perfil:Padres
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;
