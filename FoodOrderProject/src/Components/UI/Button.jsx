import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLocalGroceryStore } from "react-icons/md";
import AuthContext from "../../Context/Auth-context";

const Button = (props) => {
  const className = `flex text-1.5xl justify-around items-center hover:bg-blue-300 hover:border-2 border-black hover:text-black p-3 bg-blue-400 rounded-2xl font-bold  cursor-pointer border-2 ${props.className}`;

  const ClickHandler = () => {
    props.onClick();
  };

  const ctx = useContext(AuthContext);
  const [number, setNumber] = useState(0);

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
        {props.hasIcon && (
          <React.Fragment>
            <div className="z-20 bg-blue-100 items-center text-black text-2xl border-1 border-black  mr-2 p-2 rounded-2xl w-1xl">
              {ctx.chosenFoods.length}
            </div>
            <MdLocalGroceryStore style={{ fontSize: "30px" }} />
          </React.Fragment>
        )}
        {props.text}
      </motion.button>
    </React.Fragment>
  );
};

export default Button;
