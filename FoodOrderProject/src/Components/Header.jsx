import Button from "./UI/Button";
import AuthContext from "../Context/Auth-context";
import { useContext } from "react";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className="bg-gray-800 w-full h-35 fixed">
      <header className="fixed w-full flex justify-around mt-10 bg-blue-100 p-5 items-center ">
        <h1 className="font-bold text-2xl">MehdiMeals</h1>
        <Button
          type={"submit"}
          onClick={ctx.isCartClicked ? ctx.onSpaceClick : ctx.onCartClick}
          className="w-37 hover:border-amber-50"
          text={ctx.isCartClicked ? "Close Cart" : "Your Cart"}
          hasIcon={true}
        />
      </header>
    </div>
  );
};

export default Header;
