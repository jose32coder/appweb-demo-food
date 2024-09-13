/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [itemsCart, setItemsCart] = useState({});

  const addCart = (itemId) => {
    setItemsCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeCart = (id) => {
    setItemsCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1; // Reduce la cantidad en 1 si es mayor a 1
      } else {
        delete newCart[id]; // Elimina el ítem si la cantidad es 1 o menor
      }
      return newCart;
    });
  };

  const removeCartInTheCart = (id) => {
    setItemsCart(prev => {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
    });
};
  
  

  const setItemQuantity = (itemId, quantity) => {
    setItemsCart(prev => {
      const newCart = { ...prev };
      if (quantity > 0) {
        newCart[itemId] = quantity;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const contextValue = {
    food_list,
    itemsCart,
    addCart,
    removeCart,
    setItemQuantity,
    removeCartInTheCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
