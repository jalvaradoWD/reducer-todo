import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle_todo } from "../redux/types";

import TodoItemStyles from "../styles/TodoItem.styles";

const TodoItem = (props) => {
  const { item, completed, id } = props.todo;
  // const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleTodo = (e) => {
    // setChecked(!checked);
    dispatch({
      type: toggle_todo,
      payload: {
        todo_id: id,
      },
    });
  };

  return (
    <TodoItemStyles checked={completed}>
      <input type="checkbox" checked={completed} onChange={toggleTodo} />
      <span>{item}</span>
    </TodoItemStyles>
  );
};

export default TodoItem;
