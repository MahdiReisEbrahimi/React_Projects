import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addNewTodo(newTodoText: string) {
    setTodos((prev) => {
      return [new Todo(newTodoText), ...prev];
    });
  }

  function deleteHandler3(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="m-10 p-30">
      <Todos items={todos} onClick={deleteHandler3} />
      <NewTodo onSubmitTodo={addNewTodo} />
    </div>
  );
}

export default App;
