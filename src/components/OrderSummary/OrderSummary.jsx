/* eslint-disable react/prop-types */
// src/components/OrderSummary/OrderSummary.jsx

const OrderSummary = ({ cartItems, itemsCart }) => {
  // Verificar si cartItems está definido y es un array
  const items = Array.isArray(cartItems) ? cartItems : [];

  // Calcular el precio total sumando precio * cantidad para cada artículo
  const totalPrice = items.reduce((total, item) => {
    const quantity = itemsCart[item._id] || 0; // Obtener la cantidad del carrito
    return total + item.price * quantity;
  }, 0);

  const totalPrinceWithDelivery = totalPrice + 1.5;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:max-w-lg">
      <h2 className="text-lg font-bold mb-4">Resumen del Pedido</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="">
          <div className="max-h-96 overflow-y-auto">
            <ul className="space-y-2">
              {items.map(item => {
                const quantity = itemsCart[item._id]; // Obtener cantidad del carrito
                if (quantity > 0) {
                  return (
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
                      <span>X{quantity} ${(item.price * quantity).toFixed(2)}</span>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total con Delivery:</span>
            <span>${totalPrinceWithDelivery.toFixed(2)}</span>
          </div>
          <p className="text-red-500 text-sm pt-4">
            <strong>Nota: </strong> El costo del delivery es solo si necesitas el servicio, sino, no debes pagar el impuesto.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
