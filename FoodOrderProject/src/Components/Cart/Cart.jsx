import Card from "../UI/Card";
import AuthContext from "../../Context/Auth-context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import FinalAccept from "./FinalAccept";
import ChosenFoodsPrint from "./ChosenFoodsPrint";
import SumMonyCalculator from "./SumMonyCalculator";

const Cart = () => {
  const ctx = useContext(AuthContext);

  return (
    <Modal>
      <Card>
        <div>
          <div className="flex flex-col">
            <h2 className="text-white bg-black p-5 rounded-2xl text-3xl font-bold text-center mb-4">
              🛒 سبد خرید شما
            </h2>
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "60vh", maxWidth: "100vh" }}
            >
              <table className="w-full border-collapse border border-gray-700 rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-center text-white">
                      جمع کل
                    </th>
                    <th className="py-3 px-4 text-center text-white">
                      قیمت فی
                    </th>
                    <th className="py-3 px-4 text-center">تعداد</th>
                    <th className="py-3 px-4 text-center">نام غذا</th>
                  </tr>
                </thead>
                <ChosenFoodsPrint />
                <SumMonyCalculator />
              </table>
            </div>
            <button
              onClick={ctx.onSpaceClick}
              className="mt-5 bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              بستن سبد خرید ✖️
            </button>
            {ctx.chosenFoods.length > 0 && <FinalAccept />}
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
