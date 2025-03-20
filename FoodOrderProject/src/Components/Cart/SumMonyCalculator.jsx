import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/Auth-context";

const SumMonyCalculator = () => {
  const ctx = useContext(AuthContext);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const totalSum = ctx.chosenFoods.reduce(
      (acc, food) => acc + food.food.amount * food.number,
      0
    );
    setSum(totalSum);
  }, [ctx.chosenFoods]);

  return (
    <tfoot className="text-center">
      <tr className="flex-row border-t border-gray-700 bg-gray-800 justify-center">
        <th dir="rtl" className="py-3 px-4 text-center text-white text-2xl">
          {sum.toLocaleString()}
          <span className="text-white text-xs pt-1 pr-1">تومان</span>
        </th>
        <th colSpan="3" className="py-3 px-4 text-white text-2xl">
          جمع کل خرید
        </th>
      </tr>
    </tfoot>
  );
};

export default SumMonyCalculator;
