import { motion } from "framer-motion";

export default function Button({ text, ...props }) {
  return (
    <motion.button
      {...props}
      whileHover={{ scaleY: 1.07 }}
      className="bg-white p-2 font-bold rounded-sm w-full mt-3 cursor-pointer hover:bg-pink-200 text-[clamp(1rem,3vw,2rem)] sm:w-1/3 sm:p-3"
    >
      {text}
    </motion.button>
  );
}
