import Button from "./UI/Button";

const Header = () => {
  const clickHandler = () => {
    console.log("lsksdlkjflfjfsflk");
  };

  return (
    <header className="fixed w-full flex justify-around mt-10 bg-blue-100 p-5 items-center ">
      <h1 className="font-bold text-2xl">MehdiMeals</h1>
      <Button
        type={"submit"}
        onClick={clickHandler}
        className="w-37 hover:border-amber-50"
        text="Your Cart"
        hasIcon={true}
      />
    </header>
  );
};

export default Header;
