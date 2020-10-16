let counter = 0;

const reducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: payload.item,
          id: ++counter,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed;
        }
      });
    case "CLEAR_TODO":
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
};

export default reducer;
