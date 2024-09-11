/* eslint-disable react/prop-types */
import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"


function FoodItem({ id, name, price, description, image }) {

    const {itemsCart, addCart, removeCart} = useContext(StoreContext);

    return (
        <div className="w-full m-auto rounded-2xl shadow-lg duration-300">
            <div className="relative">
                <img src={image} className="w-full rounded-t-2xl" alt={name} />
                {!itemsCart[id]
                    ? <img className="add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full" onClick={() => addCart(id)} src={assets.add_icon_white} />
                    : <div className="absolute bottom-4 w-auto right-4 flex items-center gap-2.5 p-1 rounded-full bg-white">
                        <img src={assets.remove_icon_red} onClick={() => removeCart(id)} alt="" />
                        <p>{itemsCart[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addCart(id)} />
                    </div>
                }
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2.5">
                    <h2 className="text-lg font-medium">{name}</h2>
                    <img className="w-[60px]" src={assets.rating_starts} />
                </div>
                <p className="text-[#676767] text-xs">{description}</p>
                <p className="text-[tomato] text-xl my-2.5 font-medium">${price}</p>
            </div>

        </div>
    )
}

export default FoodItem