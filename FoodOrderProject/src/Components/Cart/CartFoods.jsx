import Card from "../UI/Card";

const CartFoods = (props) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
      <td className="py-4 px-6 text-yellow-400 font-bold text-lg text-center">
        ${props.chosenFood.amount * props.chosenFood.number}
      </td>
      <td className="py-4 px-6 text-green-400 font-bold text-lg text-center">
        ${props.chosenFood.amount}
      </td>
      <td className="py-4 px-6 text-white font-bold text-lg text-center">
        {props.chosenFood.number}
      </td>
      <td className="py-4 px-6 text-white text-lg font-bold text-center">
        {props.chosenFood.name}
      </td>
    </tr>
  );
};

export default CartFoods;
