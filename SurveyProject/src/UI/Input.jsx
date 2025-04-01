import { motion } from "framer-motion";

export default function Input({ labelText, id, ...props }) {
  return (
    <div className="flex flex-col mt-2 w-4/9">
      <label htmlFor={id} className="text-[15px] font-bold">
        {labelText}
      </label>
      <motion.input
        id={id}
        {...props}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-[3px] p-[2px] font-bold"
      />
    </div>
  );
}
