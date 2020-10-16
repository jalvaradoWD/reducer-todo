import React from "react";
import { useSelector } from "react-redux";

function App() {
  const todo = useSelector();
  console.log(todo);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
