import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/Auth-context";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";
import CostomNumberInput from "../UI/CostomNumberInput";

const CartFoods = (props) => {
  const ctx = useContext(AuthContext);

  const ChildToFatherInput = (passedInputValue) => {
    useEffect(() => {
      if (passedInputValue === 0) {
        ctx.onAddFoods(props.chosenFood.food.id, passedInputValue);
        ctx.onRemoveFood(props.chosenFood.food.id);
      } else ctx.onAddFoods(props.chosenFood.food.id, passedInputValue);
    }, [passedInputValue]);
  };

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
      
      <td
        dir="rtl"
        className="py-4 px-6 text-white font-bold text-lg text-center"
      >
        <div className="flex items-center justify-center">
          <span>
            {(
              props.chosenFood.food.amount * props.chosenFood.number
            ).toLocaleString()}
          </span>
          <span className="text-white text-xs pr-1">تومان</span>
        </div>
      </td>

      <td dir="rtl" className="py-4 px-6 text-white font-bold text-lg">
        <div className="flex items-center">
          <span>{props.chosenFood.food.amount.toLocaleString()}</span>
          <span className="text-white text-xs pr-1">تومان</span>
        </div>
      </td>

      <td className="py-4 px-6 text-white font-bold text-lg text-center">
        <CostomNumberInput
          food={props.chosenFood.food}
          inputValue={ChildToFatherInput}
          firstInputValue={props.chosenFood.number}
          hasAddButton={false}
        />
      </td>

      <td className="py-4 px-6 text-white text-lg font-bold text-center">
        {props.chosenFood.food.name}
      </td>
    </tr>
  );
};

export default CartFoods;
