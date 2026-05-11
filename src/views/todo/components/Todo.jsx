import { useState } from "react";
import TodoItem from "./todoitem/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      content: "Wäsche waschen",
      done: "false",
    },
  ]);

  function handleChangeCheckbox(event) {
    console.log(event.target.checked);
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleChangeCheckbox={handleChangeCheckbox} />
      ))}
    </div>
  );
}

export default Todo;
