import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
export default function ReduxCounter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const inputRef = useRef();

  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "dec" });
  }

  function increaseHandler() {
    dispatch({ type: "increase", amount: Number(inputRef.current.value) });
    inputRef.current.value = "";
  }

  return (
    <div className="rounded-2xl font-bold w-1/2 bg-white shadow-lg shadow-gray-400 m-auto flex flex-col items-center p-10 text-purple-700">
      <p className="p-3 text-2xl mb-7">REDUX COUNTER</p>
      <h2>{counter}</h2>
      <div className="flex flex-col justify-center w-full">
        <button
          onClick={incrementHandler}
          className=" m-2 cursor-pointer hover:bg-purple-700 bg-gray-800 p-3 rounded-2xl mt-5 text-white font-bold"
        >
          increment (+1)
        </button>
        <div className="flex flex-row items-center">
          <button
            onClick={increaseHandler}
            className="m-2 cursor-pointer hover:bg-purple-700 bg-gray-800 p-3 rounded-2xl mt-5 text-white font-bold"
          >
            increase by
          </button>
          <input
            className=" text-black bg-blue-300 rounded-2xl m-2 h-15 p-2"
            type="number"
            ref={inputRef}
          />
        </div>
        <button
          onClick={decrementHandler}
          className="m-2 cursor-pointer hover:bg-purple-700 bg-gray-800 p-3 rounded-2xl mt-5 text-white font-bold"
        >
          decrement (-1)
        </button>
      </div>

      <button className="cursor-pointer hover:bg-purple-700 bg-gray-800 p-3 rounded-2xl mt-5 text-white font-bold">
        Toggle Counter
      </button>
    </div>
  );
}
