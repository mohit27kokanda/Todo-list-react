import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const App = () => {
  const [todoState, setTodoState] = useState({
    todos: [],
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodoState({ todos: res.data }));
  }, []);

  const markComplete = (id) => {
    setTodoState({
      todos: todoState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const deleteTodo = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/$(id)")
      .then((res) =>
        setTodoState({
          todos: todoState.todos.filter((todo) => todo.id !== id),
        })
      );
  };

  const addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) =>
        setTodoState({
          todos: [...todoState.todos, res.data],
        })
      );
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Header />
                <AddTodo addTodo={addTodo} />
                <TodoList
                  todos={todoState.todos}
                  markComplete={markComplete}
                  deleteTodo={deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
