import Card from "../UI/Card";
import Button from "../UI/Button";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/Auth-context";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";

const FoodPrint = (props) => {
  const ctx = useContext(AuthContext);
  const [inputValue, setInputValue] = useState(0);
  const [addButtonVisiblity, setaddButtonVisiblity] = useState(true);

  const addFoodHandler = (event) => {
    event.preventDefault();
    ctx.onAddFoods(props.food.id, parseInt(inputValue));
  };

  useEffect(() => {
    for (let i = 0; i < ctx.chosenFoods.length; i++) {
      if (ctx.chosenFoods[i].food.id == props.food.id) {
        setInputValue(ctx.chosenFoods[i].number);
        break;
      }
    }
  }, [ctx.chosenFoods]);

  // کلیک دکمه اضافه کردن
  const onAddButtonClick = () => {
    setaddButtonVisiblity(false);
    setInputValue(1);
    ctx.onAddFoods(props.food.id, 1);
  };

  // کلیک آیکن مثبت
  const plusButtonHandler = () => {
    let temp = inputValue + 1;
    setInputValue(temp);
  };

  // کلیک آیکن منفی
  const minusButtonHandler = () => {
    if (inputValue <= 1) {
      setaddButtonVisiblity(true);
      setInputValue(0);
      ctx.onRemoveFood(props.food.id);
    } else {
      let temp = inputValue - 1;
      setInputValue(temp);
    }
  };

  const onAddFood = (
    <div className="flex items-center text-center justify-center bg-amber-50 p-1.5 pt-2 mt-1 pb-2 rounded-2xl w-35">
      <motion.button
        whileHover={{ scale: 1.5, cursor: "pointer" }}
        onClick={minusButtonHandler}
      >
        {inputValue > 1 ? (
          <FiMinusCircle style={{ color: "red", fontSize: "25px" }} />
        ) : (
          <FaRegTrashAlt style={{ color: "red", fontSize: "25px" }} />
        )}
      </motion.button>
      <div className="pl-5 pr-5 text-2xl font-bold">{inputValue}</div>
      <motion.button
        whileHover={{ scale: 1.5, cursor: "pointer" }}
        onClick={plusButtonHandler}
      >
        <CgAdd style={{ color: "green", fontSize: "30px" }} />
      </motion.button>
    </div>
  );

  return (
    <Card className="flex justify-between items-center">
      <div className="flex flex-col items-center">
        <form className="text-center" onSubmit={addFoodHandler}>
          {addButtonVisiblity ? (
            <Button
              className="mt-2 w-35"
              type="submit"
              text="اضافه کردن"
              hasIcon={false}
              onClick={onAddButtonClick}
            />
          ) : (
            onAddFood
          )}
        </form>
      </div>
      <div dir="rtl" className="text-right ">
        <h2 className="text-white text-2xl font-bold pt-1">
          {props.food.name}
        </h2>
        <p className="text-blue-200 pt-1">{props.food.detail}</p>
        <div className="flex items-center">
          <h1 className="text-white text-1xl pt-2 ">
            {`${props.food.amount}`}
          </h1>
          <span className="text-white text-xs pt-1 pr-1">تومان</span>
        </div>
      </div>
    </Card>
  );
};

export default FoodPrint;
