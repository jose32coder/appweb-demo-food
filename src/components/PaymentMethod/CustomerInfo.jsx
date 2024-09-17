/* eslint-disable react/prop-types */
// src/components/CustomerInfo.js


const CustomerInfo = ({ customerData, handleCustomerChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Información del Cliente</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleCustomerChange}
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleCustomerChange}
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
          <input
            type="text"
            name="address"
            value={customerData.address}
            onChange={handleCustomerChange}
            className="w-full border p-3 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={customerData.phone}
            onChange={handleCustomerChange}
            className="w-full border p-3 rounded"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
