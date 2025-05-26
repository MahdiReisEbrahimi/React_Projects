import React from "react";
import Todo from "../models/todo";

function TodoPrint({
  item,
  onClick,
}: {
  item: Todo;
  onClick: (id: number) => void;
}) {
  function deleteHandler() {
    onClick(item.id);
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
