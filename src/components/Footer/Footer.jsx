/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import { assets } from '../../assets/assets'

export default function Footer() {
    const [expandedSection, setExpandedSection] = useState(null)

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    const FooterSection = ({ title, children, id }) => (
        <div className="mb-6 sm:mb-0">
            <h3
                className="text-lg font-semibold mb-2 sm:mb-4 flex justify-between items-center cursor-pointer sm:cursor-default"
                onClick={() => toggleSection(id)}
            >
                {title}
                <span className="sm:hidden">
                    {expandedSection === id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </h3>
            <div className={`${expandedSection === id ? 'block' : 'hidden'} sm:block`}>
                {children}
            </div>
        </div>
    )

    return (
        <footer className="bg-gray-800 text-white mt-28">
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo and tagline */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0">
                        <img src={assets.logo} alt="Logo" className="w-auto sm:h-10 mb-4" />
                        <p className="text-sm sm:text-base text-gray-400 mb-4">Sabores auténticos que encantan: Descubre la mejor comida para cada ocasión.</p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Icon size={20} />
                                    <span className="sr-only">{Icon.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <FooterSection title="Enlaces rápidos" id="quickLinks">
                        <ul className="space-y-2">
                            {["Inicio", "Menú", "App Movil", "Contacto"].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </FooterSection>

                    {/* Contact Information */}
                    <FooterSection title="Contactanos" id="contactUs">
                        <address className="not-italic text-sm sm:text-base">
                            <p className="mb-2">Ciudad, localizacion, sitio</p>
                            <p className="mb-2">Teléfono: 0424-1234567</p>
                            <p>Correo: info@example.com</p>
                        </address>
                    </FooterSection>

                    {/* Newsletter Signup */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">¡Vamos a comer!</h3>
                        <p className="text-sm text-gray-400 mb-4">Registrate y disfruta de las mejores comidad que tenemos para ti.</p>
                        <a
                            href="#subscribe"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                        >
                            Registrate aquí
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs sm:text-sm text-gray-400">
                    © {new Date().getFullYear()} Tomato. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
