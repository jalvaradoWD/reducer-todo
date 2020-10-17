import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todoListState = useSelector((state) => state.todoReducer);

  return (
    <div>
      <ul>
        {todoListState.map((todo, index) => {
          return <TodoItem key={index} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
