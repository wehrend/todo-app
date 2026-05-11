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

  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
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
