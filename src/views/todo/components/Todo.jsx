import { useState } from "react";
import TodoItem from "./todoitem/TodoItem";
import TodoHeader from "./todoheader/TodoHeader";
import TodoBody from "./todobody/TodoBody";
import TodoList from "../../todolist/TodoList";

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
      <TodoList />
      <TodoHeader />
      <TodoBody todos={todos} />
    </div>
  );
}

export default Todo;
