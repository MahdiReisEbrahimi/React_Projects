import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

function TodoContextProvider(props) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(newTodoText: string) {
    setTodos((prev) => {
      return [new Todo(newTodoText), ...prev];
    });
  }

  function removeTodoHandler(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodoContextProvider;
