import React, { useContext } from "react";
import AuthContext from "../../Context/Auth-context";
import CartFoods from "./CartFoods";

const ChosenFoodsPrint = () => {
  const ctx = useContext(AuthContext);
  return (
    <tbody>
      {ctx.chosenFoods.length > 0 ? (
        ctx.chosenFoods.map((chosenFood) => (
          <CartFoods key={chosenFood.food.id} chosenFood={chosenFood} />
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center py-5 text-gray-400">
            🍽️ هنوز هیچ غذایی انتخاب نکردی!
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ChosenFoodsPrint;
