import FoodCard from "./FoodCard";
import AuthContext from "../Context/Auth-context";
import { useContext } from "react";
import Cart from "./Cart/Cart";

const Foods = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="bg-blue-300 w-4/5 h-200 mt-10 m-auto p-4 overflow-auto rounded-2xl">
      {ctx.foods.map((food) => {
        return <FoodCard key={food.id} food={food} />;
      })}
    </div>
  );
};

export default Foods;
