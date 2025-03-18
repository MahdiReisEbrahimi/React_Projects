import Card from "./UI/Card";
import Button from "./UI/Button";
import { useContext, useState } from "react";
import AuthContext from "../Context/Auth-context";

const FoodCard = (props) => {
  const ctx = useContext(AuthContext);
  const [inputValue, setInputValue] = useState(1);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addFoodHandler = (event) => {
    event.preventDefault();
    if (inputValue > 0) {
      ctx.onAddFoods(props.food.id, parseInt(inputValue));
    } else {
      alert("please input a valid numbear!");
    }
  };

  const birabt = () => {};

  return (
    <Card className="flex justify-between items-center">
      <div>
        <h2 className="text-white text-2xl font-bold">{props.food.name}</h2>
        <p className="text-blue-200">{props.food.detail}</p>
        <h1 className="text-green-500 font-bold text-2xl">{`$${props.food.amount}`}</h1>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={addFoodHandler}>
          <label
            className="font-bold text-amber-50"
            htmlFor={`Amount_${props.food.id}`}
          >
            Amount
          </label>
          <input
            onChange={inputChangeHandler}
            value={inputValue}
            id={`Amount_${props.food.id}`}
            type="number"
            min='1'
            max='5'
            step='1'
            defaultValue='1'
            className="w-10 m-2 bg-blue-300"
          />
          <Button
            className="mt-2 w-35"
            type="submit"
            text="add"
            hasIcon={false}
            onClick={birabt}
          />
        </form>
      </div>
    </Card>
  );
};

export default FoodCard;
