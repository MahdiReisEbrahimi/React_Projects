import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState();
  const changeHandler = (event) => {
    setValue(event.target.value);
    props.updatedValue(event.target.value);
  };
  return (
    <input
      id={props.id}
      type={props.type}
      onChange={changeHandler}
      value={value}
      className="bg-blue-200 rounded-2xl p-2"
    />
  );
};

export default Input;
