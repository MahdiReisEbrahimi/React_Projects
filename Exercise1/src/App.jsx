import Container from "./Containet";
import { FaArrowCircleRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiAlarmWarningLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Navigation from "./Navigation";
import { CiAlarmOn } from "react-icons/ci";
import { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";

function App() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2026 1:37:25").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setHours(hours);
      setMin(minutes);
      setSecond(seconds);
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className="text-white">
      <div className="flex justify-center mb-5 bg-blue-100 p-10 rounded-lg">
        <div className="text-4xl rounded-full bg-blue-500 p-10">
          <CgProfile />
        </div>
        <div className="text-4xl rounded-full bg-blue-500 p-10">
          <CgProfile />
        </div>
      </div>
      <div className="flex justify-between m-2 font-bold bg-blue-500 p-4 rounded-lg">
        <div>
          <p>Free Dailey Conversation</p>
        </div>
        <div className="rounded-full p-1 text-black bg-white">
          <FaFire />
        </div>
      </div>
      <div className="flex flex-col m-2 bg-blue-200 p-4 rounded-lg text-black">
        <div className="flex items-center text-sm">
          <CiAlarmOn />
          <p>NEXT IN -</p>
          <div className="flex items-center">
            <div className="h-8 w-8 bg-white rounded-lg ml-1 mr-1 flex justify-center items-center">
              {hours < 10 ? "0" + hours : hours}
            </div>
            <span className="ml-1">:</span>
            <div className="h-8 w-8 bg-white rounded-lg ml-1 flex justify-center items-center">
              {min < 10 ? "0" + min : min}
            </div>
            <span className="ml-1">:</span>
            <div className="h-8 w-8 bg-white rounded-lg ml-1 flex justify-center items-center">
              {second < 10 ? "0" + second : second}
            </div>
          </div>
        </div>
        <div className="text-sm font-bold mt-1 p-2">
          <p>Do any of your partners friends make you feel uncomfortable?</p>
        </div>
        <div className=" flex justify-end">
          <button className="bg-blue-300 p-2 rounded-lg">ANSWER</button>
        </div>
      </div>
      <div className="text-white flex justify-between items-center m-2 rounded-lg bg-blue-500 p-4">
        <div>
          <p className="font-bold">Invite your Partner</p>
          <p className="text-sm text-black">
            Enjoy the full app experience togeater!
          </p>
        </div>
        <div>
          <FaArrowCircleRight />
        </div>
      </div>
      <h2 className="text-black font-bold m-2 mt-8 text-xl">
        Recomended For You
      </h2>
      <Container topText={"NEVER HAVE I EVER"} text={"Dailey Life"} />
      <Container topText={"HWO IS MORE LIKELY TO?"} text={"Couple Life"} />
      <Container topText={"NEVER HAVE I EVER"} text={"Dailey Life"} />
      <Container topText={"NEVER HAVE I EVER"} text={"Dailey Life"} />
      {/* navigation */}
      <div>
        <nav className="fixed bottom-0 left-0 right-0 bg-blue-400 border-t border-gray-200 shadow-md z-50">
          <div className="flex justify-around items-center h-16">
            <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <span className="text-xs">
                <FaHome className="text-2xl text-black" />
              </span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <span className="text-xs">
                <FaHeart className="text-2xl text-black" />
              </span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <span className="text-xs">
                <RiAlarmWarningLine className="text-2xl text-black" />
              </span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <span className="text-xs">
                <CgProfile className="text-2xl text-black" />
              </span>
            </button>
          </div>
        </nav>
      </div>
      {/* widgets */}
      <div className="m-2 mb-20 font-bold text-xl">
        <p className="text-black ">Widgets</p>
      </div>
    </div>
  );
}

export default App;
