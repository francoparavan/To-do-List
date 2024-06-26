import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="What's your next task?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={addTask}
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No task to show</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span className="delete-icon" onClick={() => removeTask(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </li>
          ))
        )}
      </ul>
      <div>{tasks.length} task{tasks.length !== 1 ? "s" : ""}</div>
    </div>
  );
};

export default Todo;
