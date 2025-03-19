import React from "react";
import { motion } from "framer-motion";
import { MdLocalGroceryStore } from "react-icons/md";

const Button = (props) => {
  const className = `flex  justify-around items-center hover:bg-blue-300 hover:border-2 border-black hover:text-black p-3 bg-blue-400 rounded-2xl font-bold  cursor-pointer border-2 ${props.className}`;

  const ClickHandler = () => {
    props.onClick();
  };

  return (
    <React.Fragment>
      <motion.button
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 1px black",
          cursor: "pointer",
        }}
        type={props.type}
        className={className}
        onClick={ClickHandler}
      >
        {props.text}
        {props.hasIcon && <MdLocalGroceryStore />}
      </motion.button>
    </React.Fragment>
  );
};

export default Button;
