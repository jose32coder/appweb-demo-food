/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";

export default function Footer({ setShowLogin }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const FooterSection = ({ title, children, id }) => (
    <div className="mb-6 sm:mb-0">
      <h3
        className="text-lg font-semibold mb-2 sm:mb-4 flex justify-between items-center cursor-pointer sm:cursor-default"
        onClick={() => toggleSection(id)}
      >
        {title}
        <span className="sm:hidden">
          {expandedSection === id ? (
            <FontAwesomeIcon icon={faChevronUp} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} size="lg" />
          )}
        </span>
      </h3>
      <div
        className={`${expandedSection === id ? "block" : "hidden"} sm:block`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-800 text-white" id="contacto">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-auto mb-4"
            />
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Sabores auténticos que encantan: Descubre la mejor comida para
              cada ocasión.
            </p>
            <div className="flex space-x-4 mb-4">
              {" "}
              {/* Agregado el margen inferior aquí */}
              <a
                href="https://api.whatsapp.com/send/?phone=584126259275&text&type=phone_number&app_absent=0"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                <span className="sr-only">Whatsapp</span>
              </a>
              <a
                href="https://www.instagram.com/containers.vzla/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://maps.app.goo.gl/PaY94secAFVMNcFj6"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="lg"
                  className="text-gray-400"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <FooterSection title="Enlaces rápidos" id="quickLinks">
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Menú", href: "#menu" },
                { label: "App Móvil", href: "#appMovil" },
                { label: "Contacto", href: "#contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact Information */}
          <FooterSection title="Contactanos" id="contactUs">
            <address className="not-italic flex flex-col space-y-2 text-sm sm:text-base">
              <a
                href="https://maps.app.goo.gl/PaY94secAFVMNcFj6"
                target="_blank"
                className="text-gray-400"
              >
                Dirección: HQCP+H67, Av. 13 de Junio, Araure 3303, Portuguesa,
                Venezuela
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=584126259275&text&type=phone_number&app_absent=0"
                className="text-gray-400"
              >
                Teléfono: 04126259275
              </a>
              <a
                href="mailto:container@containers.com"
                className="text-gray-400"
              >
                Correo: containers@containers.com
              </a>
            </address>
          </FooterSection>

          {/* Newsletter Signup */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">¡Vamos a comer!</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Registrate y disfruta de las mejores comidad que tenemos para ti.
            </p>
            <button
              href="#subscribe"
              className="hidden md:flex bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-md shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300"
              onClick={() => setShowLogin(true)}
            >
              Registrate aquí
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Containers Resto & Bar. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
