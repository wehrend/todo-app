import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";

function TodoItem({ todoItem, handleChangeCheckbox }) {
  return (
    <div>
      <Checkbox
        todoItem={todoItem}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Button />
    </div>
  );
}

export default TodoItem;
