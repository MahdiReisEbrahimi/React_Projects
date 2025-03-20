import Card from "../UI/Card";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/Auth-context";
import CostomNumberInput from "../UI/CostomNumberInput";

const FoodPrint = (props) => {
  const ctx = useContext(AuthContext);
  const [inputValue, setInputValue] = useState(0);

  const addFoodHandler = (event) => {
    event.preventDefault();
    ctx.onAddFoods(props.food.id, parseInt(inputValue));
  };

  const ChildToFatherInput = (passedInputValue) => {
    setInputValue(passedInputValue);
  };

  return (
    <Card className="flex justify-between items-center">
      <div className="flex flex-col items-center">
        <form className="text-center" onSubmit={addFoodHandler}>
          <CostomNumberInput
            inputValue={ChildToFatherInput}
            food={props.food}
            firstInputValue={0}
            hasAddButton={true}
          />
        </form>
      </div>
      <div dir="rtl" className="text-right ">
        <h2 className="text-white text-2xl font-bold pt-1">
          {props.food.name}
        </h2>
        <p className="text-blue-200 pt-1">{props.food.detail}</p>
        <div className="flex items-center">
          <h1 className="text-white text-1xl pt-2 ">{props.food.amount.toLocaleString()}</h1>
          <span className="text-white text-xs pt-1 pr-1">تومان</span>
        </div>
      </div>
    </Card>
  );
};

export default FoodPrint;
