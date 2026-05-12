function Button({ buttonValue, handleButtonClickEvent, handleOnClick }) {
  return <button onClick={handleButtonClickEvent}>{buttonValue}</button>;
}

export default Button;
