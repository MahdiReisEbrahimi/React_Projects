import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";

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
            <Link
              href={"/meals"}
              className="p-2 ml-2 mr-2 bg-orange-400 rounded-lg text-black font-bold hover:bg-orange-300"
            >
              Browser Meals
            </Link>
          </li>
          <li>
            <Link
              href={"/community"}
              className="p-2 ml-2 mr-2 bg-orange-400 rounded-lg text-black font-bold hover:bg-orange-300"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
