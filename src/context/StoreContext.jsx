/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [itemsCart, setItemsCart] = useState({});

    const addCart = (itemId) => {
        if (!itemsCart[itemId]) {
            setItemsCart((prev) => ({ ...prev, [itemId]:1 }))
        }
        else {
            setItemsCart((prev) => ({ ...prev, [itemId]: prev[itemId]+1 }))
        }
    }

    const removeCart = (itemId) =>{
        setItemsCart((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    


    const contextValue = {
        food_list,
        itemsCart,
        setItemsCart,
        addCart,
        removeCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider