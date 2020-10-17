import React from "react";
import { useState } from "react";

const TodoItem = (props) => {
  const { item, completed } = props.todo;
  const [checked, setChecked] = useState(completed);

  return (
    <div>
      <span>{item}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      />
    </div>
  );
};

export default TodoItem;
