import FoodCard from "./FoodCard";
import Card from "./UI/Card";
import AuthContext from "../Context/Auth-context";
import { useContext } from "react";

const Foods = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="bg-blue-300 w-230 h-200 mt-10 m-auto p-4 overflow-auto">
      {ctx.foods.map((food) => {
        return (
          <Card key={food.id}>
            <FoodCard food={food} />
          </Card>
        );
      })}
    </div>
  );
};

export default Foods;
