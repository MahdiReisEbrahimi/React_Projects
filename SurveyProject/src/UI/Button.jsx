import { motion } from "framer-motion";

export default function Button({ text, ...props }) {
  return (
    <motion.button
      {...props}
      whileHover={{ scaleY: 1.07 }}
      className="bg-white p-2 font-bold rounded-[3px] w-full mt-3 cursor-pointer hover:bg-pink-200"
    >
      {text}
    </motion.button>
  );
}
