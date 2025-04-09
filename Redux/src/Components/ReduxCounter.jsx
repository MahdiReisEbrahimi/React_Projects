import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../Store";

export default function ReduxCounter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const inputRef = useRef();

  function incrementHandler(event) {
    event.preventDefault();
    dispatch(counterActions.increment());
  }

  function decrementHandler(event) {
    event.preventDefault();
    dispatch(counterActions.decrement());
  }

  function increaseHandler(event) {
    event.preventDefault();
    dispatch(counterActions.increase(Number(inputRef.current.value)));
    inputRef.current.value = "";
  }

  function deleteShowCounterHandler(event) {
    event.preventDefault();
    dispatch(counterActions.deleteShowCounter());
  }

  return (
    <div className="text-white rounded-lg w-1/2 m-auto border-2 border-white p-5 mt-25 flex flex-col items-center">
      {showCounter && (
        <div className="flex flex-col justify-center items-center">
          <p className="p-3 text-2xl mb-3">REDUX COUNTER</p>
          <h2 className="bg-blue-300 p-2 rounded-lg text-2xl font-bold text-black">
            {counter}
          </h2>
          <form className="flex flex-col justify-center w-full">
            <button
              onClick={incrementHandler}
              className="m-2 cursor-pointer hover:bg-blue-300 bg-white p-3 rounded-2xl mt-5 text-black font-bold"
            >
              increment (+1)
            </button>
            <button
              onClick={decrementHandler}
              className="m-2 mt-0 cursor-pointer hover:bg-blue-300 bg-white p-3 rounded-2xl text-black font-bold"
            >
              Decrement (-1)
            </button>
            <div className="flex flex-col m-2 mt-0 mb-4 cursor-pointer bg-white p-3 rounded-2xl text-black font-bold">
              <input
                className="w-full text-white bg-gray-800 rounded-2xl h-13 p-3"
                type="number"
                ref={inputRef}
              />
              <button
                onClick={increaseHandler}
                className="w-full cursor-pointer bg-gray-800 p-3 rounded-2xl mt-1 text-white font-bold"
              >
                Increase By
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={deleteShowCounterHandler}
        className={`cursor-pointer ${
          showCounter
            ? "hover:bg-red-700 bg-red-500"
            : "hover:bg-green-800 bg-green-600"
        } w-4/5 bg-gray-800 p-3 rounded-2xl text-white font-bold`}
      >
        {showCounter ? "REMOVE COUNTER" : "SHOW COUNTER"}
      </button>
    </div>
  );
}
