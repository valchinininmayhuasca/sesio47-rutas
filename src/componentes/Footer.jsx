import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-100 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* DATOS DE LA EMPRESA */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">
            Datos de la Empresa
          </h3>
          <ul className="space-y-2 text-purple-200">
            <li>
              <span className="font-semibold text-purple-300">Dirección:</span>{" "}
              971 Santa Clorinda, San Martín de Porres
            </li>
            <li>
              <span className="font-semibold text-purple-300">Teléfonos:</span>{" "}
              97854589 / 98748795
            </li>
            <li>
              <span className="font-semibold text-purple-300">Correo:</span>{" "}
              cetprosmp@crackthecode.la
            </li>
          </ul>
        </section>

        {/* UBICACIÓN */}
        <section className="flex flex-col items-center">
          <h4 className="text-2xl font-semibold text-purple-300 mb-3">
            Ubicación
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3466361723094!2d-77.06295722610558!3d-12.019640241393953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cede39f7dc47%3A0x73c5c016d20e66a3!2sCETPRO%20San%20Mart%C3%ADn%20de%20Porres!5e0!3m2!1ses!2sus!4v1760369389380!5m2!1ses!2sus"
            width="280"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación de la Empresa"
            className="rounded-xl shadow-lg border border-purple-500"
          ></iframe>
        </section>

        {/* REDES SOCIALES */}
        <section className="flex flex-col items-center md:items-end">
          <h4 className="text-2xl font-semibold text-purple-300 mb-3">
            Síguenos
          </h4>
          <div className="flex space-x-6 text-3xl">
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-purple-300 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-purple-200 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </section>
      </div>

      {/* LÍNEA INFERIOR */}
      <div className="text-center text-sm text-purple-300 mt-10 border-t border-purple-700 pt-4">
        © {new Date().getFullYear()} CETPRO San Martín de Porres — Todos los derechos reservados.
      </div>
    </footer>
  );
}

