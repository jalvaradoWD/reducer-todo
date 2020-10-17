export { add_todo, toggle_todo } from "./types";

import { add_todo } from "./types";

export const addTodo = (todo) => {
  return {
    type: add_todo,
    payload: todo,
  };
};

export const toggleTodo = (todo_id) => {
  return {
    type: toggle_todo,
    payload: {
      todo_id,
    },
  };
};
