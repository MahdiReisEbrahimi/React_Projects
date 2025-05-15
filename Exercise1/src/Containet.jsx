import { MdAccountCircle } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { motion, scale } from "framer-motion";

export default function Container({ topText, text }) {
  return (
    <div className="rounded-lg flex justify-between p-4 pt-8 pb-8 text-black bg-blue-200 m-2">
      <div className="flex flex-col justify-around items-start">
        <div className="text-sm">{topText}</div>
        <div className="text-lg text-bold">{text}</div>
        <div className="mt-5">
          <MdAccountCircle className="text-2xl text-blue-500" />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-between">
        <BsEmojiHeartEyesFill className="text-xl text-blue-500" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-300 mt-10 p-2 rounded-lg"
        >
          ANSWER
        </motion.button>
      </div>
    </div>
  );
}
