import Card from "./UI/Card";
import Button from "./UI/Button";

const FoodCard = (props) => {
  return (
    <Card className="flex justify-between items-center">
      <div>
        <h2 className="text-white text-2xl font-bold">{props.food.name}</h2>
        <p className="text-blue-200">{props.food.detail}</p>
        <h1 className="text-green-500 font-bold text-2xl">{`$${props.food.amount}`}</h1>
      </div>
      <div className="flex flex-col items-center">
        <form>
          <label className="font-bold text-amber-50" htmlFor="Amount">
            Amount
          </label>
          <input
            id="Amount"
            type="number"
            min={1}
            max={50}
            className="w-10 m-2 bg-blue-300"
          />
        </form>
        <Button
          className="mt-2 w-35"
          type="submit"
          text="add"
          hasIcon={false}
        />
      </div>
    </Card>
  );
};

export default FoodCard;
