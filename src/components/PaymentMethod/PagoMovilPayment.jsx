/* eslint-disable react/prop-types */

import { useState } from 'react';

const PagoMovilPayment = ({ onPagoMovilChange, pagoMovilData, amount }) => {
  const [activeButton, setActiveButton] = useState(null); // Cambiar a null para ningún botón activo inicialmente
  const [showTotalAmount, setShowTotalAmount] = useState(false);

  const handleToggleAmount = () => {
    setShowTotalAmount(prevState => !prevState);
  };

  // Manejador de clics para actualizar el estado
  const handleButtonClick = (buttonName) => {
    setActiveButton(prevButton => prevButton === buttonName ? null : buttonName); // Desactivar si el botón ya está activo
    handleToggleAmount(); // Alternar el monto
  };

  const totalAmount = amount + 1.5;

  return (
    <div>
      {/* Datos del Pago Móvil */}
      <h2 className="text-2xl font-semibold mb-4">Datos del Pago Móvil</h2>
      <ul className="mb-6 space-y-2">
        <li className="text-gray-700 cursor-default">
          <strong>Rif:</strong> J126345678
        </li>
        <li className="text-gray-700 cursor-default">
          <strong>Teléfono:</strong> 0424-1234567
        </li>
        <li className="text-gray-700 cursor-default">
          <strong>Banco:</strong> Banesco (0134)
        </li>
        <li className='text-red-500 cursor-default text-sm'>
          <strong>Importante:</strong> Realizar el pago móvil por el monto que le indica el sistema.
        </li>
        <li className='text-red-500 cursor-default text-sm'>
          <strong>Nota: </strong> El delivery tiene un costo adicional de $1.5
        </li>
      </ul>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Banco Emisor</label>
          <input
            type="text"
            name="bancoEmisor"
            value={pagoMovilData.bancoEmisor}
            onChange={onPagoMovilChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ej. Mercantil (0105)"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Referencia</label>
          <input
            type="text"
            name="referencia"
            value={pagoMovilData.referencia}
            onChange={onPagoMovilChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Número de referencia del pago"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono del Titular</label>
          <input
            type="tel"
            name="telefonoTitular"
            value={pagoMovilData.telefonoTitular}
            onChange={onPagoMovilChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ej. 0412-1234567"
            required
          />
        </div>
      </form>
      <div className='py-4'>
        <label className="block text-sm font-medium text-gray-700 mb-2">Monto a Pagar</label>
        <input
          type="text"
          value={activeButton === 'delivery' ? totalAmount.toFixed(2) : amount.toFixed(2)}
          className="w-full border p-3 rounded bg-gray-100 text-gray-700 cursor-not-allowed"
          readOnly
          placeholder="Monto exacto del pago"
        />
      </div>

      <div className='flex gap-2'>
        <button
          onClick={() => handleButtonClick('delivery')}
          className={`py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${activeButton === 'delivery' ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Delivery
        </button>
        <button
          onClick={() => handleButtonClick('tienda')}
          className={`py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${activeButton === 'tienda' ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Buscar en tienda
        </button>
      </div>
    </div>
  );
};

export default PagoMovilPayment;
