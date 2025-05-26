import React from "react";
import Todo from "../models/todo";
import TodoPrint from "./TodosPrint";

function Todos({
  items,
  onClick,
}: {
  items: Todo[];
  onClick: (id: number) => void;
}) {
  
  function deleteHandler2(id: number) {
    onClick(id);
  }

  return (
    <ul className="bg-gray-200 p-1 rounded-sm">
      {items.map((item) => (
        <TodoPrint key={item.id} item={item} onClick={deleteHandler2} />
      ))}
    </ul>
  );
}

export default Todos;
