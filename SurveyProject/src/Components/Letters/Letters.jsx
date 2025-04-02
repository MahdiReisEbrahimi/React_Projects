import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";
import AuthContex from "../../Context/Auth-context";
import { useContext, useActionState, useOptimistic } from "react";

export default function Letters({ letter }) {
  const ctx = useContext(AuthContex);

  async function agreeButtonAction() {
    setScoresOptimistically("up");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    ctx.agreeClickHandler(letter.id);
  }

  const [agreeState, agreeAction, agreePending] =
    useActionState(agreeButtonAction);

  async function disAgreeButtonAction() {
    setScoresOptimistically("down");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    ctx.disAgreeClickHandler(letter.id);
  }

  const [disAgreeState, disAgreeAction, disAgreePending] =
    useActionState(disAgreeButtonAction);

  const [optimisticScores, setScoresOptimistically] = useOptimistic(
    letter.score,
    (prevScores, mode) => {
      mode === "up" ? prevScores++ : prevScores--;
    }
  ); //first parameter of useOptimistic is the thing which should be updated optimisticaly , second one is a function of work. this function takes at least 1 'previuos' paramether but can have more.

  return (
    <div className="m-5 p-10 bg-pink-200 shadow-2xl border-2 border-pink-400 rounded-sm">
      <h2 className="font-bold text-[clamp(1rem,3.5vw,3rem)] ">
        {letter.title}
      </h2>
      <p className="ml-10 text-gray-700 text-[clamp(0.7rem,2.5vw,2rem)]">
        Shared by {letter.name}
      </p>
      <p className="mt-7 text-xl ">{letter.text}</p>

      <form className="flex mt-8">
        <motion.button
          whileHover={{ scale: 1.5, cursor: "pointer" }}
          className={`border border-green-900  p-0.5 font-bold ${
            agreePending || disAgreePending ? "bg-gray-400" : "bg-green-200"
          }`}
          formAction={agreeAction}
          disabled={agreePending || disAgreePending}
        >
          <GoArrowUp />
        </motion.button>
        <span className="pl-3 pr-3 text-pink-800 font-bold">
          {letter.score}
        </span>
        <motion.button
          whileHover={{ scale: 1.5, cursor: "pointer" }}
          className={`border border-red-900 font-bold p-0.5 ${
            agreePending || disAgreePending ? "bg-gray-400" : " bg-red-400"
          }`}
          formAction={disAgreeAction}
          disabled={agreePending || disAgreePending}
        >
          <GoArrowDown />
        </motion.button>
      </form>
    </div>
  );
}
