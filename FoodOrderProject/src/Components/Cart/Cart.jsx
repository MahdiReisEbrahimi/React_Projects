import Card from "../UI/Card";
import CartFoods from "./CartFoods";
import AuthContext from "../../Context/Auth-context";
import { useContext } from "react";

const chosenFoods = [
  {
    name: "Iranian Kebab",
    detail: "maded with fresh meats",
    amount: 123,
    id: 4,
  },
];

const Cart = () => {
  const ctx = useContext(AuthContext);
  return (
    <Card>
      <div
        // onClick={ctx.onSpaceClick}
        className="fixed inset-0 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-blue-200 p-5 shadow-lg rounded-2xl">
          {chosenFoods.map((Chosenfood) => {
            return (
              <CartFoods
                key={Chosenfood.id}
                name={Chosenfood.name}
                amount={Chosenfood.amount}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Cart;
