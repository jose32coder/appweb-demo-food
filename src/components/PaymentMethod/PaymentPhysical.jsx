/* eslint-disable react/prop-types */



function PaymentPhysical({ selectedMethod }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {selectedMethod === 'pagoDelivery' ? (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pago a Delivery</h2>
          <p className="text-gray-700">
            Gracias por elegir el servicio de delivery. Cuando el pedido llegue a tu puerta, podrás realizar el pago directamente al repartidor de manera física. Asegúrate de tener el monto exacto disponible para una transacción rápida y segura.
          </p>
          <div className="text-red-500 cursor-default text-sm pt-2">
            <strong>Nota: </strong> El delivery tiene un costo adicional de $1.5
          </div>
        </div>
      ) : selectedMethod === 'pagoTienda' ? (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pago en Tienda</h2>
          <p className="text-gray-700">
            Puedes pasar a recoger tu pedido directamente en nuestra tienda. Una vez en el local, podrás realizar el pago de manera física. Nuestro equipo estará encantado de atenderte y asegurarse de que tu compra sea rápida y sin problemas.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default PaymentPhysical;
