/* eslint-disable react/prop-types */
// src/components/PaymentMethod.js

const PaymentMethod = ({ paymentData, onChange, onPlaceOrder }) => (
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mb-6 mx-auto">
    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Método de Pago</h2>
    <form className="space-y-5" onSubmit={onPlaceOrder}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cardName">
          Nombre en la Tarjeta
        </label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={paymentData.cardName}
          onChange={onChange}
          placeholder="Juan Pérez"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cardNumber">
          Número de Tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={onChange}
          placeholder="1234 5678 9123 4567"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="expiryDate">
            Fecha de Vencimiento
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={onChange}
            placeholder="MM/AA"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
            required
          />
        </div>
        <div className="md:flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentData.cvv}
            onChange={onChange}
            placeholder="123"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={paymentData.email}
          onChange={onChange}
          placeholder="juan.perez@example.com"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={paymentData.phone}
          onChange={onChange}
          placeholder="+1234567890"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150 ease-in-out"
      >
        Procesar Pago
      </button>
    </form>
  </div>
);

export default PaymentMethod;
