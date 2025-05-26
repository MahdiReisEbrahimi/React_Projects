import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <div className="m-10 p-30">
        <Todos />
        <NewTodo />
      </div>
    </TodoContextProvider>
  );
}

export default App;
