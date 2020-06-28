import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const [isOver, setIsOver] = React.useState(false);
  function over() {
    setIsOver(true);
  }
  function out() {
    setIsOver(false);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
        onMouseOver={over}
        onMouseOut={out}
        style={{ backgroundColor: isOver ? "black" : "white" }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
