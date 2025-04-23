import { useState } from "react";
import { RiDiscountPercentLine } from "react-icons/ri";

export default function HomePage_Events() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);

  var countDownDate = new Date("Jan 5, 2026 1:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(hours);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setMin(minutes);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setSecond(seconds);
  }, 1000);

  return (
    <div className="h-50 bg-blue-200 p-1">
      <div className="flex items-center justify-center">
        <span className="ml-1">
          <RiDiscountPercentLine />
        </span>
        <h2>مهدی پارتی</h2>
        <div className="flex items-center">
          <div className="h-8 w-8 bg-white rounded-lg ml-1 mr-1 flex justify-center items-center">
            {second < 10 ? "0" + second : second}
          </div>
          <span className="ml-1">:</span>
          <div className="h-8 w-8 bg-white rounded-lg ml-1 flex justify-center items-center">
            {min < 10 ? "0" + min : min}
          </div>
          <span className="ml-1">:</span>
          <div className="h-8 w-8 bg-white rounded-lg ml-1 flex justify-center items-center">
            {hours < 10 ? "0" + hours : hours}
          </div>
        </div>
      </div>
    </div>
  );
}
