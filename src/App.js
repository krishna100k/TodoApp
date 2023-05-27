import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/header";
import "./styles.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleClick = (event) => {
    setNewTask(event.target.value);
  };

  const addTodo = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask
    };
    const newTodoList = [...todo, task];
    setTodo(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todo.filter((task) => {
      return task.id === id ? false : true;
    });

    setTodo(newTodoList);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="input-container">
          <input
            className="input-box"
            placeholder="Add a New Task"
            onChange={handleClick}
          />
          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="below-input">
          {todo.map((task) => {
            return (
              <div className="task-grid">
                <h1 className="task-name">{task.taskName}</h1>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(task.id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
