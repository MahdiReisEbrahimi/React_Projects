import React, { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

function NewTodo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsContext = useContext(TodosContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    itemsContext.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
