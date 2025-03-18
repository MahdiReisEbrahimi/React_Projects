import Card from "../UI/Card";
import CartFoods from "./CartFoods";
import AuthContext from "../../Context/Auth-context";
import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";

const Cart = () => {
  const ctx = useContext(AuthContext);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    const totalSum = ctx.chosenFoods.reduce(
      (acc, food) => acc + food.amount * food.number,
      0
    );
    setSum(totalSum);
  }, [ctx.chosenFoods]);

  return (
    <Modal>
      <Card>
        <div>
          <div className="flex flex-col">
            <h2 className="text-white text-3xl font-bold text-center mb-4">
              🛒 سبد خرید شما
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-700 rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-center text-yellow-400">
                      جمع کل
                    </th>
                    <th className="py-3 px-4 text-center text-green-400">
                      قیمت فی
                    </th>
                    <th className="py-3 px-4 text-center">تعداد</th>
                    <th className="py-3 px-4 text-center">نام غذا</th>
                  </tr>
                </thead>
                <tbody>
                  {ctx.chosenFoods.length > 0 ? (
                    ctx.chosenFoods.map((chosenFood) => (
                      <CartFoods key={chosenFood.id} chosenFood={chosenFood} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-5 text-gray-400">
                        🍽️ هنوز هیچ غذایی انتخاب نکردی!
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr className="border-t border-gray-700 bg-gray-800">
                    <th className="py-3 px-4 text-center text-yellow-400">
                      ${sum}
                    </th>
                    <th colSpan="3" className="py-3 px-4 text-white">
                      جمع کل خرید
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <button
              onClick={ctx.onSpaceClick}
              className="mt-5 bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              بستن سبد خرید ✖️
            </button>
            <button
              onClick={ctx.onSpaceClick}
              className="mt-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              تایید نهایی ✅
            </button>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
