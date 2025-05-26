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
  return (
    <div className="m-10 p-30">
      <Todos items={todos} />
      <NewTodo onSubmitTodo={addNewTodo} />
    </div>
  );
}

export default App;
