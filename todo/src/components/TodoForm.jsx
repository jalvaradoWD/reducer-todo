import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/types";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    return dispatch({
      type: add_todo,
      payload: todo,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Todos</h2>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
