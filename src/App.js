import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
  let [listTasks, setTask] = useState([]);
  let [showAddTask, setShowAddTask] = useState(false);
  let [unCompletedTasks, setUnCompletedTasks] = useState([]);
  let [completedTasks, setCompletedTasks] = useState([]);

  let fnShowAddTask = () => {
    setShowAddTask(true);
  };

  let closeForm = () => {
    setShowAddTask(false);
  };

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
      getUnCompletedTasks(tasks);
      getCompletedTasks(tasks);
    }
  };

  let removeTask = (taskId) => {
    let tasks = listTasks.filter((task) => task.taskId !== taskId);
    setTask(tasks);
    getUnCompletedTasks(tasks);
    getCompletedTasks(tasks);
  };

  let onStatusChanged = (e, taskId) => {
    // setStatus(e.target.checked ? 1 : 0);
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
    getUnCompletedTasks(tasks);
    getCompletedTasks(tasks);
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
    getUnCompletedTasks(tasks);
    getCompletedTasks(tasks);
  };

  let getUnCompletedTasks = (list) => {
    setUnCompletedTasks(() => {
      return list
        .filter((task) => task.status === 0)
        .sort(
          (a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate
        );
    });
  };

  let getCompletedTasks = (list) => {
    setCompletedTasks(() => {
      return list
        .filter((task) => task.status === 1)
        .sort(
          (a, b) =>
            b.dateCompleted - a.dateCompleted || b.favourite - a.favourite
        );
    });
  };

  let unCompletedComponent = [];
  if (unCompletedTasks.length > 0) {
    unCompletedComponent = unCompletedTasks.map((task) => {
      return (
        <TodoList
          key={task.taskId}
          taskId={task.taskId}
          taskName={task.taskName}
          description={task.description}
          favourite={task.favourite}
          taskStatus={task.status}
          onRemoveTask={removeTask}
          onStatusChanged={onStatusChanged}
          onFavouriteChanged={onFavouriteChanged}
        />
      );
    });
  }

  let countInCompleted = () => {
    return unCompletedTasks.length;
  };

  let completedComponent = [];
  if (completedTasks.length > 0) {
    completedComponent = completedTasks.map((task) => {
      return (
        <TodoList
          key={task.taskId}
          taskId={task.taskId}
          taskName={task.taskName}
          description={task.description}
          favourite={task.favourite}
          taskStatus={task.status}
          onRemoveTask={removeTask}
          onStatusChanged={onStatusChanged}
          onFavouriteChanged={onFavouriteChanged}
        />
      );
    });
  }

  let countCompleted = () => {
    return completedTasks.length;
  };

  let itemAddTask = "";

  if (showAddTask === true) {
    itemAddTask = <AddTask addNewTask={addTask} closeAddNew={closeForm} />;
  } else {
    itemAddTask = (
      <div className="buttonRow">
        <button className="addNewButton" onClick={fnShowAddTask}>
          Add Task
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <main>
        <header className="container" align="center">
          <h1 align="center">List Task</h1>
        </header>
        <section className="container">
          {itemAddTask}
          <div>
            <label>InCompleted: {countInCompleted()} task</label>
          </div>
          <ul className="listTask">{unCompletedComponent}</ul>
          <div>
            <label>Completed: {countCompleted()} task</label>
          </div>
          <ul className="listTask">{completedComponent}</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
