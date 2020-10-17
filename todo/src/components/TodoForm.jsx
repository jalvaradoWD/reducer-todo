import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodo } from "../redux/actions";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    return dispatch(addTodo(todo));
  };

  const clearTodos = (e) => {
    e.preventDefault();
    dispatch(clearTodo());
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Todos</h2>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <input type="submit" value="Add Todo" />
      <button onClick={clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
