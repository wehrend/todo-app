import TodoItem from "../todoitem/TodoItem";
import { deleteTodoItemFromList } from "../../../todolist/TodoList";
import "./TodoBody.css";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  return (
    <div class="todo-body">
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
