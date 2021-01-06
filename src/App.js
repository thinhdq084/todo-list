import React, { useState } from "react";
import "./App.css";
import Task from "./components/TodoList";

const taskTemplate = {
  taskName: "a",
  description: "a1",
  taskStatus: false,
};

function App() {
  let tasks = [];

  let [listTask, setTask] = useState(tasks);
  let [showAddTask, setShowAddTask] = useState(false);

  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [taskStatus, setStatus] = useState(false);

  let fnShowAddTask = () => {
    setShowAddTask(true);
  };

  let closeForm = () => {
    setShowAddTask(false);
  };

  let addTask = (name, description, taskStatus) => {
    let obj = {
      ...taskTemplate,
      taskName: name,
      description: description,
      taskStatus: taskStatus,
    };
    tasks = [...listTask, { ...obj }];
    setTask(tasks);
  };

  let removeTask = (taskName) => {
    setTask((listTask) => {
      return listTask.filter((task) => task.taskName !== taskName);
    });
  };

  let linkList = () => {
    closeForm();
  };

  let handleAddTask = () => {
    setStatus(0);
    addTask(name, description, taskStatus);
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

  let onChangedDes = (e) => {
    setDescription(e.target.value);
  };

  let onStatusCheckedChanged = (e, taskName) => {
    setStatus(e.target.checked);

    tasks = listTask.map((task) => {
      if (task.taskName === taskName) {
        let newTask = { ...task, taskStatus: taskStatus };
        return newTask;
      }
      return task;
    });

    setTask(tasks);
  };

  let itemTasks = [];
  if (listTask.length > 0) {
    itemTasks = listTask.map((task) => {
      return (
        <Task
          key={task.taskName}
          taskName={task.taskName}
          description={task.description}
          taskStatus={task.taskStatus}
          onRemoveProduct={removeTask}
          onStatusCheckedChanged={onStatusCheckedChanged}
        />
      );
    });
  }

  let itemAddTask = "";

  if (showAddTask === true) {
    itemAddTask = (
      <div>
        <div className="container">
          <h2>Add New Task</h2>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                className="taskName"
                placeholder="Enter name of task"
                onChange={onChangedName}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Description:
              <input
                type="text"
                className="taskDes"
                placeholder="Enter description of task"
                onChange={onChangedDes}
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-default"
            onClick={handleAddTask}
          >
            Add
          </button>
          <button type="button" className="btn btn-default" onClick={linkList}>
            Back
          </button>
        </div>
      </div>
    );
  } else {
    itemAddTask = (
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={fnShowAddTask}
      >
        Add Task
      </button>
    );
  }

  return (
    <div className="App">
      <main>
        <header className="container">
          <h1>List Task</h1>
        </header>
        <section className="container">
          <ul className="products">{itemTasks}</ul>
        </section>
        {itemAddTask}
      </main>
    </div>
  );
}

export default App;
