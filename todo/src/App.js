import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const todo = useSelector((state) => state.todoReducer);

  return (
    <>
      <h1>Hello world</h1>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
