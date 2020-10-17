import { add_todo, toggle_todo, clear_todo } from "../types";

let counter = 0;

const reducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case add_todo:
      return [
        ...state,
        {
          item: payload,
          id: ++counter,
          completed: false,
        },
      ];
    case toggle_todo:
      return state.map((todo) => {
        if (todo.id === payload.todo_id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case clear_todo:
      return state.filter((todo) => {
        console.log(state);
        return todo.completed !== true;
      });
    default:
      return state;
  }
};

export default reducer;
