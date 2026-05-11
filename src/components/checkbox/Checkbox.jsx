function Checkbox({ todoItem, handleChangeCheckbox }) {
  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckbox}
      ></input>
      ;<label for={todoItem.id}>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
