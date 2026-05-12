import TodoItem from "../todoitem/TodoItem";

import { deleteTodoItemFromList } from "../../../todolist/TodoList";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Add this line
          todoItem={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
    </div>
  );
}

export default TodoBody;
