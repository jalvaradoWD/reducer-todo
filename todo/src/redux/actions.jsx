import { add_todo, toggle_todo, clear_todo } from "./types";

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

export const clearTodo = (todo_id) => {
  return {
    type: clear_todo,
    payload: {
      todo_id,
    },
  };
};
