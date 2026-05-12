import TodoHeader from "../todo/components/todoheader/TodoHeader";
import TodoBody from "../todo/components/todobody/TodoBody";
import { useState } from "react";

function TodoList({}) {
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

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody todos={todos} handleChangeCheckbox={handleChangeCheckbox} />
    </div>
  );
}

export default TodoList;
