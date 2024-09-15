import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import useFoodListAnimation from "../../Hooks/useFoodListAnimation";

function FoodList({ category }) {
  const { food_list } = useContext(StoreContext);
  const containerRef = useFoodListAnimation(); // Usa el hook actualizado

  return (
    <div className="mt-8 px-4" id="food-list" ref={containerRef}>
      <h2 className="font-medium text-start mb-5" style={{ fontSize: 'max(2vw, 24px)' }}>
        El mejor plato cerca de tí
      </h2>
      {/* Ajusta el contenedor para que permita scroll solo cuando sea necesario */}
      <div className="h-[80vh] sm:h-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                className="w-full h-[350px] flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodList;
