import React from "react";
import Todo from "../models/todo";

const TodoPrint: React.FC<{ item: Todo }> = ({ item }) => {
  return <li>{item.text}</li>;
};

export default TodoPrint;
