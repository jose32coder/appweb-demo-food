/* eslint-disable react/prop-types */
// src/components/OrderSummary/OrderSummary.jsx

const OrderSummary = ({ cartItems }) => {
  // Verificar si cartItems está definido y es un array
  const items = Array.isArray(cartItems) ? cartItems : [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:max-w-lg">
      <h2 className="text-lg font-bold mb-4">Resumen del Pedido</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {items.map(item => (
              <li key={item._id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                    width="64"
                    height="64"
                  />
                  <span>{item.name}</span>
                </div>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${items.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
