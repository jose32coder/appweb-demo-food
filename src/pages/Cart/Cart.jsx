import { useContext } from 'react';
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';  // Importa useNavigate
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
    const { itemsCart, food_list, removeCartInTheCart, setItemQuantity } = useContext(StoreContext);
    const navigate = useNavigate();

    const cartItems = food_list.filter(item => itemsCart[item._id] > 0);

    const handleRemoveItem = (itemId) => {
        removeCartInTheCart(itemId);
    };

    const handleChangeQuantity = (itemId, delta) => {
        const currentQuantity = itemsCart[itemId] || 0;
        const newQuantity = currentQuantity + delta;
        setItemQuantity(itemId, newQuantity);
    };

    const handleProcessPayment = () => {
        navigate('/order');
    };

    return (
        <div className="flex flex-col items-center justify-center my-auto w-full min-h-screen">
            <div className="flex flex-col items-center w-full bg-gray-100 p-4 md:p-10">
                <div className="w-full max-w-4xl bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg md:text-xl font-bold mb-4">Tu carrito</h2>
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <span className="text-md md:text-base">
                            {cartItems.length} {cartItems.length > 1 || cartItems.length === 0 ? 'Compras' : 'Compra'}
                        </span>
                        <span className="font-bold text-md md:text-base">
                            Total: ${cartItems.reduce((total, item) => total + item.price * itemsCart[item._id], 0).toFixed(2)}
                        </span>
                    </div>
                    <div className="space-y-4 min-h-10 max-h-96 overflow-auto">
                        {cartItems.map(item => (
                            <div key={item._id} className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 md:space-x-10">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded"
                                        width="64"
                                        height="64"
                                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                    />
                                    <div>
                                        <h3 className="font-semibold text-md md:text-base">{item.name}</h3>
                                        <p className="text-xs md:text-md text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                                            onClick={() => handleChangeQuantity(item._id, -1)}
                                        >
                                            <FontAwesomeIcon icon={faMinus} className="w-4 h-4" />
                                        </button>
                                        <input
                                            type="number"
                                            value={itemsCart[item._id]}
                                            className="w-16 border rounded p-1 text-center"
                                            readOnly
                                        />
                                        <button
                                            className="bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                                            onClick={() => handleChangeQuantity(item._id, 1)}
                                        >
                                            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <span className="font-semibold text-md md:text-base">${item.price * itemsCart[item._id]}</span>
                                    <button
                                        className="text-red-500 translate-y-0.5"
                                        onClick={() => handleRemoveItem(item._id)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-6">
                        <Link to='/#menu'>
                            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-300 mb-4 md:mb-0">
                                Seguir comprando
                            </button>
                        </Link>
                        <button
                            className="bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700"
                            onClick={handleProcessPayment}
                        >
                            Procesar pago
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
