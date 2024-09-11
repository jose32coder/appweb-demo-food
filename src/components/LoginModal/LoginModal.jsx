/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícono de cerrar

export default function LoginModal({ setShowLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {/* Fondo oscuro semi-transparente */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {/* Contenedor del modal */}
        <div className="relative bg-white w-full max-w-sm p-6 rounded-lg shadow-lg z-10 -translate-y-20 transition-all duration-300 ease-in-out">
          {/* Botón para cerrar el modal */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-200"
            onClick={() => setShowLogin(false)} // Ocultar modal al hacer clic
          >
            <FontAwesomeIcon icon={faTimes}  size="lg" />
          </button>

          <div className="text-center">
            <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
              {isLogin ? 'Iniciar sesión' : 'Registrarse'}
            </h2>
          </div>

          <form className="mt-6 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              {/* Campo de nombre solo visible en registro */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300 sm:text-sm"
                    placeholder="Nombre"
                  />
                </div>
              )}

              {/* Campo de correo electrónico */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300 sm:text-sm"
                  placeholder="Correo electrónico"
                />
              </div>

              {/* Campo de contraseña */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            {/* Checkbox de términos */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary transition-all duration-300"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                Acepto los términos y condiciones
              </label>
            </div>

            {/* Botón de envío */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary duration-300"
              >
                {isLogin ? 'Iniciar sesión' : 'Registrar'}
              </button>
            </div>
          </form>

          {/* Enlace para cambiar entre iniciar sesión y registrarse */}
          <div className="text-center mt-4">
            <button
              onClick={toggleForm}
              className="font-medium text-primary hover:text-primary-dark transition-colors duration-300"
            >
              {isLogin
                ? '¿No tienes una cuenta? Regístrate'
                : '¿Ya tienes una cuenta? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
