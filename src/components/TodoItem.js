import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      border: "2px dotted",
      padding: "20px 20px",
      textDecoration: props.todos.completed ? "line-through" : "none",
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          onChange={() => props.markComplete(props.todos.id)}
        />{" "}
        {props.todos.title}
        <button
          style={btnStyle}
          onClick={() => props.deleteTodo(props.todos.id)}>
          x
        </button>
      </p>
    </div>
  );
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer",
};

//PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
