import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function MainNavigator() {
    return (
      <div className="fixed bottom-0 left-0 w-full z-50">
        <nav>
          <ul className="flex justify-around items-center text-3xl bg-blue-300">
            <li>
              <Link to={"/"} className="cursor-pointer p-3">
                <FiHome />
              </Link>
            </li>
            <li>
              <Link to={"products"}>
                <CiShoppingBasket />
              </Link>
            </li>
            <li>
              <Link to={"cart"}>
                <MdOutlineShoppingCart />
              </Link>
            </li>
            <li>
              <Link to={"account"}>
                <MdOutlineAccountCircle />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  