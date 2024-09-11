/* eslint-disable react/prop-types */
// src/components/OrderDetails.js

const OrderDetails = ({ customerData, paymentData, onCustomerChange, onPaymentChange, onPlaceOrder }) => (
  <div className="bg-white p-8 rounded-lg w-full max-w-4xl mx-auto">
    <h1 className="text-2xl font-semibold mb-6 text-gray-900">Detalles del Pedido</h1>
    <div className="space-y-8">
      <div className="w-full">
        <h2 className="text-xl font-medium mb-4 text-gray-800">Información del Cliente</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerData.name}
              onChange={onCustomerChange}
              placeholder="Juan Pérez"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerData.email}
              onChange={onCustomerChange}
              placeholder="juan.perez@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={customerData.address}
              onChange={onCustomerChange}
              placeholder="Calle Falsa 123, Ciudad, País"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
        </form>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-medium mb-4 text-gray-800">Método de Pago</h2>
        <form className="space-y-5" onSubmit={onPlaceOrder}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cardName">Nombre en la Tarjeta</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentData.cardName}
              onChange={onPaymentChange}
              placeholder="Juan Pérez"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cardNumber">Número de Tarjeta</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={onPaymentChange}
              placeholder="1234 5678 9123 4567"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="expiryDate">Fecha de Vencimiento</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={onPaymentChange}
                placeholder="MM/AA"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={onPaymentChange}
                placeholder="123"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={paymentData.email}
              onChange={onPaymentChange}
              placeholder="juan.perez@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={paymentData.phone}
              onChange={onPaymentChange}
              placeholder="+1234567890"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            Procesar Pago
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default OrderDetails;
