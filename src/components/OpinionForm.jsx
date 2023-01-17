import React, { useState } from "react";
import Foto3 from "../assets/Foto3.jpeg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebaseConfig/firebase";

const MySwal = withReactContent(Swal);

function OpinionForm() {
  const opinionCollection = collection(db, "opiniones");

  const [correoUser, setCorreoUser] = useState("");
  const [respuestaUser, setRespuestaUser] = useState("");
  const [descripcionUser, setDescripcionUser] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log({ correoUser, respuestaUser, descripcionUser });
    await addDoc(opinionCollection, {
      correoUser,
      respuestaUser,
      descripcionUser,
    });
    setCorreoUser("");
    setRespuestaUser("");
    setDescripcionUser("");
    MySwal.fire({
      title: "Opinión Enviada",
      text: "Gracias por darnos tu opinión",
      confirmButtonText: "Aceptar",
    });
  };

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
            className="relative bg-gray-800 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute top-16 right-10 bottom-2 pointer-events-none hidden lg:block h-64 w-96"
              aria-hidden="true"
            >
              <img className="relative" src={Foto3} alt="Foto 3 Kid Kard" />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2 text-4xl font-bold">
                  KidKard está en proceso de lanzamiento
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Estamos validando si es factible lanzar este producto al
                  mercado. Te agradeceríamos si nos das tu opinión acerca de
                  este producto.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={onSubmitForm}>
                  <div className="mb-4">
                    <label
                      className="block text-white my-2 text-sm font-bold mb-2"
                      htmlFor="correo"
                    >
                      Correo:
                    </label>
                    <input
                      type="email"
                      name="correo"
                      onChange={(e) => setCorreoUser(e.target.value)}
                      value={correoUser}
                      className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                      placeholder="Ingresa tu Correo: "
                      aria-label="Your email…"
                      id="correo"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white my-2 text-sm font-bold mb-2"
                      htmlFor="respuesta"
                    >
                      ¿Comprarías el producto?
                    </label>
                    <select
                      name="respuesta"
                      id="respuesta"
                      onChange={(e) => setRespuestaUser(e.target.value)}
                      className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT">Elige una opción</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white my-2 text-sm font-bold mb-2"
                      htmlFor="descripcion"
                    >
                      ¿Por qué?
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      onChange={(e) => setDescripcionUser(e.target.value)}
                      value={descripcionUser}
                      type="text"
                      className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                      placeholder="Ingresa tu comentario: "
                      aria-label="Ingresa tu comentario"
                    ></textarea>
                  </div>
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 shadow">
                    Enviar
                  </button>
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
