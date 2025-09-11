import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = `${import.meta.env.VITE_API_URL}/tasks`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!text) return;
    await axios.post(API, { text });
    setText("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <h1>To-Do List with DevOps DB Test</h1>
      <div className="input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task._id)} title="Delete">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
