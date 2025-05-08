import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <header className="text-white flex justify-around items-center mt-2">
      <Link className="flex items-center" href={"/"}>
        <Image
          src={logo}
          alt="A plate with food on it"
          className="w-25 mr-2"
          priority
        />
        <p className="font-bold text-lg ml-1"> NextLevel Food</p>
      </Link>
      <nav>
        <ul className="flex justify-between">
          <li>
            <NavLink href={"/meals"} text={"Browser Meals"} />
          </li>
          <li>
            <NavLink href={"/community"} text={"Foodies Community"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
