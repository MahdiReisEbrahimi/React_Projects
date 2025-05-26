import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const items = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  return (
    <div className="m-10 p-30">
      <Todos items={items} />
    </div>
  );
}

export default App;
