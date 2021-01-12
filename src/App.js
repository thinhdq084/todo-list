import React, { useState } from "react";
import "./App.css";
import InCompleted from "./components/InCompleted";
import Completed from "./components/Completed";
import AddTask from "./components/AddTask";

function App() {
  let [listTasks, setTask] = useState([]);

  let addTask = (name, description) => {
    if (name === "") {
      alert("Please enter Task name.");
    } else {
      let obj = {
        taskId: new Date().getTime(),
        taskName: name,
        description: description,
        status: 0,
        favourite: 0,
        dateCreate: new Date().getTime(),
        dateCompleted: "null",
      };
      let tasks = [...listTasks, { ...obj }];

      setTask(tasks);
    }
  };

  let removeTask = (taskId) => {
    let tasks = listTasks.filter((task) => task.taskId !== taskId);
    setTask(tasks);
  };

  let onStatusChanged = (e, taskId) => {
    let tasks = listTasks.map((task) => {
      if (task.taskId === taskId) {
        let newTask = {
          ...task,
          status: e.target.checked === true ? 1 : 0,
          dateCompleted: new Date().getTime(),
        };
        return newTask;
      }
      return task;
    });

    setTask(tasks);
  };

  let onFavouriteChanged = (status, taskId) => {
    let tasks = listTasks.map((task) => {
      if (task.taskId === taskId && task.status === 0) {
        let newTask = {
          ...task,
          favourite: status,
        };
        return newTask;
      }
      return task;
    });

    setTask(tasks);
  };

  return (
    <div className="App">
      <main>
        <header className="container" align="center">
          <h1 align="center">List Task</h1>
        </header>
        <section className="container">
          {/* {itemAddTask} */}
          <AddTask addNewTask={addTask} />
          <InCompleted
            tasks={listTasks}
            removeTask={removeTask}
            onStatusChanged={onStatusChanged}
            onFavouriteChanged={onFavouriteChanged}
          />
          <Completed
            tasks={listTasks}
            removeTask={removeTask}
            onStatusChanged={onStatusChanged}
            onFavouriteChanged={onFavouriteChanged}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
