import React from "react";
import TodoPrint from "./TodosPrint";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

function Todos() {
  const itemsContext = useContext(TodosContext);
  function deleteHandler2(id: number) {}

  return (
    <ul className="bg-gray-200 p-1 rounded-sm">
      {itemsContext.items.map((item) => (
        <TodoPrint key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Todos;
