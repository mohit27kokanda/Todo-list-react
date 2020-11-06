import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = (props) => {
  return props.todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todos={todo}
        markComplete={props.markComplete}
        deleteTodo={props.deleteTodo}
      />
    );
  });
};

//PropTypes
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
