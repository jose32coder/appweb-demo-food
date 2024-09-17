/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Confirmation from '../../components/Confirmation/Confirmation';
import usePlaceOrderAnimation from '../../Hooks/usePlaceOrderAnimation';
import PaymentMethodForm from '../../components/PaymentMethod/PaymentMethod';
import CustomerInfo from '../../components/PaymentMethod/CustomerInfo';
// Componente para métodos de pago

const PlaceOrder = () => {
  const { itemsCart, food_list } = useContext(StoreContext);
  const cartItems = food_list.filter(item => itemsCart[item._id] > 0);

  // Información del cliente
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',  // Agregar campo de teléfono
  });

  // Estado para manejar el método de pago seleccionado
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Manejar cambios en el formulario del cliente
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Procesar pedido
    console.log('Procesando pedido:', customerData, selectedPaymentMethod);
    setIsOrderConfirmed(true);
  };

  // Hook de animación
  const { containerRef, detailsRef, summaryRef } = usePlaceOrderAnimation();

  return (
    <div className="flex flex-col items-center mt-10 w-full min-h-screen py-36" ref={containerRef}>
      {!isOrderConfirmed ? (
        <div className="w-full max-w-6xl flex flex-col-reverse bg-gray-200 lg:flex-row gap-6 p-5">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg" ref={detailsRef}>
            <h2 className='text-2xl font-semibold mb-4' >Detalles de la compra</h2>
            <CustomerInfo customerData={customerData}
              handleCustomerChange={handleCustomerChange}
            />

            {/* Formulario dinámico según el método de pago */}
            <PaymentMethodForm selectedPaymentMethod={selectedPaymentMethod} />

            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-black text-white py-3 rounded"
            >
              Procesar Pedido
            </button>
          </div>

          <div className="w-full lg:w-1/3 rounded-lg" ref={summaryRef}>
            <OrderSummary cartItems={cartItems} itemsCart={itemsCart} />
          </div>
        </div>
      ) : (
        <Confirmation />
      )}
    </div>
  );
};

export default PlaceOrder;
