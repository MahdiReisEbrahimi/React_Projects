import { useEffect, useState } from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function HomePage_Events() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);

  const events = useSelector((state) => state.events);

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
    <div className="bg-blue-200 p-1">
      <div className="flex items-center justify-center mt-1">
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
      <div className="m-3 h-40 overflow-x-auto">
        <ul className="flex h-40 w-max">
          {events.map((event) => (
            <li
              key={event.id}
              className="rounded-lg ml-2 border p-1 w-30 flex flex-col justify-around items-center shrink-0"
            >
              <img
                src={event.imageUrl}
                alt={event.eventName}
                className="h-1/2 rounded-lg"
              />
              {event.eventName}
              <button className="border rounded-lg p-1 cursor-pointer text-sm bg-blue-400 text-white">
                اطلاعات بیشتر
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
