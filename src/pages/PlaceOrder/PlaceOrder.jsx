import { useContext, useState } from 'react';
import { StoreContext } from "../../context/StoreContext";
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Confirmation from '../../components/Confirmation/Confirmation';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import usePlaceOrderAnimation from '../../Hooks/usePlaceOrderAnimation'; // Importar el hook

const PlaceOrder = () => {
  const { itemsCart, food_list } = useContext(StoreContext);

  const cartItems = food_list.filter(item => itemsCart[item._id] > 0);

  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    address: '',
    orderNumber: '#123456',
    orderDate: '01/09/2024',
  });

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    phone: '',
  });

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log('Procesando pedido:', customerData, paymentData);
    setIsOrderConfirmed(true);
  };

  const { containerRef, detailsRef, summaryRef } = usePlaceOrderAnimation(); // Usar el hook

  return (
    <div className="flex flex-col items-center mt-10 w-full min-h-screen py-36" ref={containerRef}>
      {!isOrderConfirmed ? (
        <div className="w-full max-w-6xl flex flex-col-reverse bg-gray-200 lg:flex-row gap-6 p-5">
          <div className="flex-1 bg-white rounded-lg shadow-lg" ref={detailsRef}>
            <OrderDetails
              customerData={customerData}
              paymentData={paymentData}
              onCustomerChange={handleCustomerChange}
              onPaymentChange={handlePaymentChange}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
          <div className="w-full lg:w-1/3 rounded-lg" ref={summaryRef}>
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      ) : (
        <Confirmation />
      )}
    </div>
  );
};

export default PlaceOrder;
