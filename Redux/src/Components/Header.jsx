import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store/auth";
import { Link } from "react-router-dom";

export default function Header() {
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  return (
    <header className="flex items-center justify-around w-full bg-blue-300 h-1/7 p-5">
      <h1 className="font-bold text-3xl w-1/3">Redux Auth</h1>
      <div className="flex justify-around text-lg w-1/2">
        <button className="cursor-pointer p-2">
          <Link to={"/"}>Home</Link>
        </button>
        <button className="cursor-pointer p-2">
          <Link to={"/product"}>My Products</Link>
        </button>
        <button className="cursor-pointer p-2">
          <Link to={"/counter"}>Counter</Link>
        </button>
        <button className="cursor-pointer p-2">
          <Link to={"/login"}>Login</Link>
        </button>
        {isLogedIn && (
          <button
            onClick={logoutHandler}
            className="cursor-pointer bg-yellow-400 p-2 rounded-lg font-bold"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
