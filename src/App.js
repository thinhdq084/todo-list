import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
  let [listTasks, setTask] = useState([]);
  let [showAddTask, setShowAddTask] = useState(false);
  let [taskStatus, setStatus] = useState(false);
  let [unCompletedTasks, setUnCompletedTasks] = useState([]);
  let [completedTasks, setCompletedTasks] = useState([]);

  let fnShowAddTask = () => {
    setShowAddTask(true);
  };

  let closeForm = () => {
    setShowAddTask(false);
  };

  let addTask = (name, description, taskStatus) => {
    let obj2 = listTasks.find((task) => task.taskName === name);
    if (obj2) {
      alert("Đã tồn tại task có tên: " + name);
    } else {
      let obj = {
        taskName: name,
        description: description,
        status: taskStatus,
        favourite: false,
        dateCreate: new Date().getTime(),
        dateCompleted: "null",
      };
      let tasks = [...listTasks, { ...obj }];

      setTask(tasks);

      setUnCompletedTasks(() => {
        return tasks
          .filter((task) => task.status !== true)
          .sort(
            (a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate
          );
      });

      setCompletedTasks(() => {
        return tasks
          .filter((task) => task.status === true)
          .sort(
            (a, b) =>
              a.dateCompleted - b.dateCompleted || b.favourite - a.favourite
          );
      });
    }
  };

  let removeTask = (taskName) => {
    let tasks = listTasks.filter((task) => task.taskName !== taskName);
    setTask(tasks);

    setUnCompletedTasks(() => {
      return tasks
        .filter((task) => task.status !== true)
        .sort(
          (a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate
        );
    });

    setCompletedTasks(() => {
      return tasks
        .filter((task) => task.status === true)
        .sort(
          (a, b) =>
            a.dateCompleted - b.dateCompleted || b.favourite - a.favourite
        );
    });
  };

  let onStatusChanged = (e, taskName) => {
    setStatus(e.target.checked);
    let tasks = listTasks.map((task) => {
      if (task.taskName === taskName) {
        let newTask = {
          ...task,
          status: taskStatus,
          dateCompleted: new Date().getTime(),
        };
        return newTask;
      }
      return task;
    });

    setTask(tasks);

    setUnCompletedTasks(() => {
      return tasks
        .filter((task) => task.status !== true)
        .sort(
          (a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate
        );
    });

    setCompletedTasks(() => {
      return tasks
        .filter((task) => task.status === true)
        .sort(
          (a, b) =>
            a.dateCompleted - b.dateCompleted || b.favourite - a.favourite
        );
    });
  };

  let onFavouriteChanged = (status, taskName) => {
    let tasks = listTasks.map((task) => {
      if (task.taskName === taskName) {
        let newTask = {
          ...task,
          favourite: status,
        };
        return newTask;
      }
      return task;
    });

    setTask(tasks);

    setUnCompletedTasks(() => {
      return tasks
        .filter((task) => task.status !== true)
        .sort(
          (a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate
        );
    });

    setCompletedTasks(() => {
      return tasks
        .filter((task) => task.status === true)
        .sort(
          (a, b) =>
            a.dateCompleted - b.dateCompleted || b.favourite - a.favourite
        );
    });
  };

  let unCompletedComponent = [];
  if (unCompletedTasks.length > 0) {
    unCompletedComponent = unCompletedTasks.map((task) => {
      return (
        <TodoList
          key={task.taskName}
          taskName={task.taskName}
          description={task.description}
          favourite={task.favourite}
          taskStatus={task.status}
          onRemoveProduct={removeTask}
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
          key={task.taskName}
          taskName={task.taskName}
          description={task.description}
          favourite={task.favourite}
          taskStatus={task.status}
          onRemoveProduct={removeTask}
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
