import { useContext, useState } from 'react';
 // Ajusta la ruta según tu estructura de carpetas
import PagoMovilPayment from './PagoMovilPayment';
import { StoreContext } from '../../context/StoreContext';
import PaymentPhysical from './PaymentPhysical';


const PaymentMethod = () => {
  const { itemsCart, food_list } = useContext(StoreContext);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [pagoMovilData, setPagoMovilData] = useState({
    bancoEmisor: '',
    referencia: '',
    telefonoTitular: ''
  });

  // Filtrar items del carrito
  const cartItems = food_list.filter(item => itemsCart[item._id] > 0);

  // Calcular el precio total
  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = itemsCart[item._id];
    return total + item.price * quantity;
  }, 0);

  const handlePagoMovilChange = (e) => {
    const { name, value } = e.target;
    setPagoMovilData({
      ...pagoMovilData,
      [name]: value
    });
  };

  return (
    <div className='pt-10'>
      <h2 className="text-2xl font-semibold mb-6">Método de Pago</h2>

      {/* Botones para seleccionar el método de pago */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedMethod('pagoMovil')}
          className={`py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${selectedMethod === 'pagoMovil' ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Pago Móvil
        </button>
        <button
          onClick={() => setSelectedMethod('pagoTienda')}
          className={`py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${selectedMethod === 'pagoTienda' ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Pago en Tienda
        </button>
        <button
          onClick={() => setSelectedMethod('pagoDelivery')}
          className={`py-2 px-4 text-sm font-medium rounded transition-colors duration-300 ${selectedMethod === 'pagoDelivery' ? 'bg-gray-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Pago a Delivery
        </button>
      </div>

      {/* Renderiza el formulario de PagoMovilPayment si el usuario selecciona Pago Móvil */}
      {selectedMethod === 'pagoMovil' && (
        <PagoMovilPayment
          pagoMovilData={pagoMovilData}
          onPagoMovilChange={handlePagoMovilChange}
          amount={totalPrice} // Pasar el monto total aquí
        />
      )}
       {(selectedMethod === 'pagoTienda' || selectedMethod === 'pagoDelivery') && (
        <PaymentPhysical selectedMethod={selectedMethod} />
      )}
    </div>
  );
};

export default PaymentMethod;
