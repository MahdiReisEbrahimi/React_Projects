import React, { useContext , useState , useEffect } from "react";
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
    <tfoot>
      <tr className="border-t border-gray-700 bg-gray-800">
        <th className="py-3 px-4 text-center text-white">${sum}</th>
        <th colSpan="3" className="py-3 px-4 text-white">
          جمع کل خرید
        </th>
      </tr>
    </tfoot>
  );
};

export default SumMonyCalculator;
