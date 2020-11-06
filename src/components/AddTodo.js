import React, { useState } from "react";

export default function AddTodo(props) {
  const [inputState, setInputState] = useState({
    title: "",
  });

  const onChange = (event) => {
    setInputState({
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(inputState.title);
    setInputState({ title: "" });
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "9", padding: "10px" }}
        placeholder="Add Todo"
        onChange={onChange}
        value={inputState.title}
      />
      <button className="btn" style={{ flex: "2" }}>
        Submit
      </button>
    </form>
  );
}
