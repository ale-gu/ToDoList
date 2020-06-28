import React from "react";

function ToDoItem(props) {
  var [isDone, setIsDone] = React.useState(false);
  function handleClick() {
    setIsDone(prevValue => !prevValue);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.newItem}
      </li>
    </div>
  );
}

export default ToDoItem;
