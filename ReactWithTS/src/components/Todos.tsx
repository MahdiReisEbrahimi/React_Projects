import React from "react";
import Todo from "../models/todo";
import TodoPrint from "./TodosPrint";

function Todos({ items }: { items: Todo[] }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoPrint key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
