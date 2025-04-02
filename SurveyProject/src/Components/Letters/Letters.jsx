import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";
import AuthContex from "../../Context/Auth-context";
import { useContext } from "react";

export default function Letters({ letter }) {
  const ctx = useContext(AuthContex);

  function goodClickHandler() {}

  return (
    <div className="m-5 p-10 bg-pink-200 shadow-2xl border-2 border-pink-400 rounded-sm">
      <h2 className="font-bold text-[clamp(1rem,3.5vw,3rem)] ">
        {letter.title}
      </h2>
      <p className="ml-10 text-gray-700 text-[clamp(0.7rem,2.5vw,2rem)]">
        Shared by {letter.name}
      </p>
      <p className="mt-7 text-xl ">{letter.text}</p>
      <div className="flex mt-8">
        <motion.button
          whileHover={{ scale: 1.5, cursor: "pointer" }}
          className="border border-green-900 bg-green-200 p-0.5 font-bold"
          onClick={() => {
            ctx.agreeClickHandler(letter.id);
          }}
        >
          <GoArrowUp />
        </motion.button>
        <div className="pl-3 pr-3 text-pink-800 font-bold">{letter.score}</div>
        <motion.button
          whileHover={{ scale: 1.5, cursor: "pointer" }}
          className="border border-red-900 bg-red-400 font-bold p-0.5"
          onClick={() => {
            ctx.disAgreeClickHandler(letter.id);
          }}
        >
          <GoArrowDown />
        </motion.button>
      </div>
    </div>
  );
}
