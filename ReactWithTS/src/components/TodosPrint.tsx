import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "../models/todo";

function TodoPrint({ item }: { item: Todo }) {
  const todoContext = useContext(TodosContext);
  function deleteHandler() {
    todoContext.removeTodo(item.id);
  }

  return (
    <li
      onClick={deleteHandler}
      className="border-b-1 cursor-pointer border-l-1 p-1"
    >
      {item.text}
    </li>
  );
}

export default TodoPrint;
