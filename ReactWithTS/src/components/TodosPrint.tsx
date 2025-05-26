import React from "react";

const TodoPrint: React.FC<{ text: string }> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoPrint;
