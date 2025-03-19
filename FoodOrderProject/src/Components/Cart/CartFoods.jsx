import React, { useState, useContext } from "react";
import AuthContext from "../../Context/Auth-context";

const CartFoods = (props) => {
  const [foodNumber, setFoodNumber] = useState(props.chosenFood.number);
  const ctx = useContext(AuthContext);

  const numberChangeHandler = (event) => {
    setFoodNumber(event.target.value);
    ctx.onAddFoods(props.chosenFood.food.id, parseInt(event.target.value));
  };

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
      <td className="py-4 px-6 text-white font-bold text-lg text-center">
        ${props.chosenFood.food.amount * props.chosenFood.number}
      </td>
      <td className="py-4 px-6 text-white font-bold text-lg text-center">
        ${props.chosenFood.food.amount}
      </td>
      <td className="py-4 px-6 text-white font-bold text-lg text-center">
        <input
          type="number"
          className="w-10 bg-white text-black p-1"
          min={1}
          max={5}
          value={foodNumber}
          onChange={numberChangeHandler}
        />
      </td>
      <td className="py-4 px-6 text-white text-lg font-bold text-center">
        {props.chosenFood.food.name}
      </td>
    </tr>
  );
};

export default CartFoods;
