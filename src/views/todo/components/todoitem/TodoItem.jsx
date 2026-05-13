import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";
import "./TodoItem.css";

function TodoItem({ todoItem, handleChangeCheckbox, deleteTodoItemFromList }) {
  console.log("--- TodoItem Render Check ---");
  console.log("deleteTodoItemFromList:", deleteTodoItemFromList);

  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }

  function handleChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckbox(updatedTodoItem);
  }

  return (
    <div class="todo-item">
      <Checkbox
        todoItem={todoItem}
        handleChangeCheckbox={handleChangeCheckboxEvent}
      />
      <Button
        buttonValue={"Löschen"}
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
