import { motion } from "framer-motion";

export default function Input({ labelText, id, ...props }) {
  return (
    <div className="flex flex-col mt-2 w-full  sm:w-4/9 sm:mt-5">
      <label htmlFor={id} className="text-[clamp(1rem,3vw,2rem)] font-bold">
        {labelText}
      </label>
      <motion.input
        id={id}
        {...props}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-sm p-1 font-bold w-full sm:p-3 sm:pl-2 sm:text-2xl"
      />
    </div>
  );
}
