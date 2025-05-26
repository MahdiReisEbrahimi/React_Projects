import React, { useRef } from "react";

function NewTodo({ onSubmitTodo }: { onSubmitTodo: (text: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    onSubmitTodo(enteredText);
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
