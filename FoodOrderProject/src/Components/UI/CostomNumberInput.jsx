import React, { useState, useContext, useEffect } from "react";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "./Button";
import AuthContext from "../../Context/Auth-context";

const CostomNumberInput = (props) => {
  const ctx = useContext(AuthContext);
  const [inputValue, setInputValue] = useState(props.firstInputValue);
  const [addButtonVisiblity, setaddButtonVisiblity] = useState(true);

  const onAddButtonClick = () => {
    setaddButtonVisiblity(false);
    setInputValue(1);
    ctx.onAddFoods(props.food.id, 1);
  };

  const plusButtonHandler = () => {
    let temp = inputValue + 1;
    setInputValue(temp);
  };

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

  useEffect(() => {
    const foundFood = ctx.chosenFoods.find(
      (item) => item.food.id === props.food.id
    );

    if (foundFood) {
      setInputValue(foundFood.number);
    } else {
      setInputValue(0);
      setaddButtonVisiblity(true);
    }
  }, [ctx.chosenFoods, props.food.id]);

  props.inputValue(inputValue);

  const customButton = (
    <div className="text-black flex items-center text-center justify-center bg-amber-50 p-1.5 pt-2 mt-1 pb-2 rounded-2xl w-35">
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
    <React.Fragment>
      {props.hasAddButton ? (
        addButtonVisiblity ? (
          <Button
            className="mt-2 w-35"
            type="submit"
            text="اضافه کردن"
            hasIcon={false}
            onClick={onAddButtonClick}
          />
        ) : (
          customButton
        )
      ) : (
        customButton
      )}
    </React.Fragment>
  );
};

export default CostomNumberInput;
