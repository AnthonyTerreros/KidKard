import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-6 gap-8 py-8 md:py-12 border-t border-gray-200 content-center">
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Mas Productos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Correo
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Dirreccion
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Ubicacion
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <svg
              className="mx-auto"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="75"
              viewBox="0 0 1068.000000 660.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,660.000000) scale(0.100000,-0.100000)"
                fill="#FF0000"
                stroke="none"
              >
                <path
                  d="M715 6109 c-112 -11 -242 -43 -274 -67 -37 -27 -60 -63 -61 -97 -1
-16 -2 -1267 -1 -2779 l1 -2748 38 -38 c77 -77 264 -106 631 -97 302 7 428 38
479 115 16 24 17 131 22 1424 l5 1397 466 -732 c1121 -1760 1322 -2073 1342
-2095 33 -36 108 -71 195 -90 116 -26 709 -25 831 1 171 37 215 77 208 187 -3
54 -14 86 -60 184 -32 65 -57 121 -57 122 0 2 1305 4 2900 4 l2900 0 0 2581 0
2581 -567 -7 c-545 -6 -3968 -32 -4798 -37 l-400 -2 -6 37 c-12 75 -82 115
-245 144 -123 21 -595 25 -712 5 -157 -26 -225 -64 -289 -159 -21 -32 -135
-197 -253 -368 -117 -170 -252 -366 -299 -435 -47 -69 -103 -151 -126 -182
-22 -31 -263 -380 -535 -775 l-495 -719 -5 1256 c-5 1197 -6 1257 -23 1284
-25 38 -104 72 -212 91 -108 19 -469 28 -600 14z m-288 -171 c-3 -8 -6 -5 -6
6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m947 -249 c-1 -111 -5 -204 -8 -207 -3
-3 -6 88 -6 201 0 114 4 207 9 207 4 0 7 -90 5 -201z m8576 -2309 l0 -2250
-2847 0 -2848 1 -216 327 c-465 704 -717 1085 -1000 1512 -162 245 -298 450
-301 456 -4 5 62 100 146 210 633 827 1454 1904 1467 1924 l16 24 1674 13
c1946 15 3636 29 3797 31 l112 2 0 -2250z m-8583 -2793 c-1 -45 -3 -5 -3 88 0
94 2 130 3 82 2 -48 2 -125 0 -170z"
                />
                <path
                  d="M4630 5278 l-35 -13 -3 -810 c-1 -445 0 -820 3 -832 4 -16 17 -26 48
-34 52 -14 234 -8 265 9 l22 13 0 824 0 824 -22 12 c-33 18 -234 22 -278 7z
m199 -843 c1 -404 -3 -735 -7 -735 -5 0 -16 8 -26 18 -15 17 -16 79 -16 717 0
638 1 700 16 717 10 10 21 18 25 18 4 0 8 -331 8 -735z"
                />
                <path
                  d="M5344 5257 l-29 -25 0 -797 0 -797 29 -25 29 -25 336 4 c388 4 455
14 616 94 154 75 258 190 324 355 51 129 66 223 65 419 -1 156 -4 186 -27 272
-73 273 -251 448 -527 519 -77 20 -117 22 -436 26 l-351 5 -29 -25z m197 -822
c-1 -508 -4 -692 -13 -702 -10 -12 -13 -12 -20 1 -10 17 -11 1375 -2 1401 6
14 9 15 21 2 12 -12 14 -117 14 -702z m499 556 c159 -50 258 -161 307 -341 24
-91 24 -318 0 -418 -33 -139 -99 -239 -198 -303 -79 -50 -162 -69 -341 -76
l-158 -6 0 588 0 588 163 -6 c126 -4 176 -9 227 -26z m567 -468 c12 -43 8
-263 -6 -313 -19 -65 -46 -123 -70 -144 -27 -24 -27 -25 4 153 14 79 25 163
25 187 0 51 20 144 32 144 4 0 11 -12 15 -27z"
                />
                <path
                  d="M5043 3239 c-35 -10 -36 -11 -123 -264 -27 -77 -64 -185 -83 -240
-244 -699 -387 -1121 -387 -1144 0 -43 36 -53 175 -49 104 3 119 5 133 24 10
11 42 97 72 192 l55 171 318 1 c174 0 320 0 324 1 4 0 35 -81 68 -180 33 -99
66 -186 73 -193 9 -9 57 -14 157 -16 135 -4 144 -3 164 17 25 25 25 27 -34
201 -176 512 -495 1424 -507 1447 -6 13 -27 27 -47 33 -45 12 -314 12 -358 -1z
m117 -116 c0 -5 -75 -235 -167 -513 -147 -443 -171 -508 -198 -533 -16 -15
-23 -25 -13 -21 34 12 28 -34 -27 -202 -30 -92 -55 -174 -55 -181 0 -23 -19
-24 -34 -1 -14 22 -11 36 40 193 31 94 58 181 60 194 3 14 50 158 105 320 56
163 132 388 170 500 38 113 76 215 84 228 15 22 35 31 35 16z m173 -560 c64
-197 117 -361 117 -365 0 -5 -110 -8 -244 -8 l-244 0 121 365 c67 201 124 365
127 365 3 0 58 -161 123 -357z"
                />
                <path
                  d="M6263 3216 l-28 -24 -3 -794 c-1 -436 0 -803 3 -815 3 -15 17 -25 43
-32 56 -16 216 -14 257 3 l35 15 0 335 0 336 88 0 c99 0 148 -17 198 -69 47
-48 78 -112 184 -371 76 -188 100 -237 120 -247 39 -21 294 -14 315 8 23 23
12 56 -96 312 -129 304 -169 370 -259 428 l-49 32 76 38 c165 83 253 227 253
413 0 64 -24 164 -51 218 -33 65 -111 135 -192 173 -122 57 -185 65 -546 65
l-320 0 -28 -24z m203 -486 c-3 -190 -5 -354 -5 -365 0 -11 2 -174 4 -362 2
-189 0 -343 -4 -343 -4 0 -15 8 -25 19 -15 17 -17 76 -17 711 0 716 2 752 39
703 11 -15 12 -82 8 -363z m353 250 c41 -6 94 -20 119 -31 122 -59 149 -258
50 -365 -61 -66 -123 -85 -283 -87 l-130 -2 -3 235 c-1 129 0 240 2 247 6 16
135 17 245 3z m481 -242 c0 -51 -41 -135 -60 -123 -21 13 -2 181 23 197 20 12
37 -22 37 -74z m-793 -1085 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0
-35z"
                />
                <path
                  d="M7782 3223 c-13 -10 -27 -36 -32 -58 -13 -57 -13 -1500 0 -1547 19
-68 19 -68 355 -68 319 0 426 10 548 51 208 70 351 204 427 402 54 139 64 203
64 412 -1 164 -4 201 -23 270 -61 226 -177 373 -366 465 -154 75 -204 82 -600
87 -329 4 -352 4 -373 -14z m186 -135 c9 -9 12 -177 12 -694 0 -602 -2 -683
-15 -694 -10 -9 -19 -10 -26 -3 -10 10 -14 1377 -4 1394 8 12 19 11 33 -3z
m499 -136 c165 -53 268 -169 314 -352 21 -82 18 -337 -5 -420 -26 -96 -61
-163 -116 -223 -94 -103 -189 -135 -422 -144 l-158 -6 0 588 0 588 163 -5
c124 -4 176 -10 224 -26z m577 -612 c-1 -143 -13 -206 -55 -280 -45 -79 -49
-42 -20 150 11 69 24 162 30 208 6 46 14 88 17 94 17 27 28 -45 28 -172z"
                />
              </g>
            </svg>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Acerca del Producto
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Beneficios
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Deja tu Opinion
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Redes Sociales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                to="#"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Kid Kard (c) Todos los derechos reversados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
