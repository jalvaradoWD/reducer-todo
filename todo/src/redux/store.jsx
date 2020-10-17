import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo";

const store = createStore(
  combineReducers({
    todoReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
