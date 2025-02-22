import Card from "../UI/Card";

const CartFoods = (props) => {
  return (
    <Card className="flex justify-between items-center">
      <h2 className="text-white mr-70 text-2xl font-bold">{props.name}</h2>
      <h1 className="text-green-500 font-bold text-2xl">{`$${props.amount}`}</h1>
    </Card>
  );
};

export default CartFoods;
