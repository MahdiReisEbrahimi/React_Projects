import { FaArrowCircleRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiAlarmWarningLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-300 border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <span className="text-xs">
            <FaHome className="text-2xl" />
          </span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <span className="text-xs">
            <FaHeart className="text-2xl" />
          </span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <span className="text-xs">
            <RiAlarmWarningLine className="text-2xl" />
          </span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <span className="text-xs">
            <CgProfile className="text-2xl" />
          </span>
        </button>
      </div>
    </nav>
  );
}
