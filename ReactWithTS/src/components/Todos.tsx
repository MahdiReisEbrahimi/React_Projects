import React from "react";
import Todo from "../models/todo";
import TodoPrint from "./TodosPrint";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoPrint key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
