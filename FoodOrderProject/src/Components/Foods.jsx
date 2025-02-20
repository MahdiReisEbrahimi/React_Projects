import FoodCard from "./FoodCard";
import Card from "./UI/Card";

const Foods = (props) => {
  return (
    <div className="bg-blue-300 w-230 h-200 mt-10 m-auto p-4 overflow-auto">
      {props.foods.map((food) => {
        return (
          <Card>
            <FoodCard food={food} />
          </Card>
        );
      })}
    </div>
  );
};

export default Foods;
