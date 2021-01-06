import React, { useState } from "react";
import "./App.css";
import Task from "./components/TodoList";
import AddTask from "./components/AddTask";

const taskTemplate = {
  taskName: "a",
  description: "a1",
  taskStatus: false,
};

function App() {
  let tasks = [];
  // tasks[0]={...taskTemplate};
  let [listTask, setTask] = useState(tasks);
  let [showAddForm, setShowAddForm] = useState(false);

  let fnShowAddForm = () => {
    setShowAddForm(true);
  };
  let closeForm = () => {
    setShowAddForm(false);
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
    // this.forceUpdate();
    alert("Thành công.");
  };

  let removeTask = (taskName) => {
    setTask((listTask) => {
      return listTask.filter((task) => task.taskName !== taskName);
    });
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
        />
      );
    });
  }
  if (showAddForm === true) {
    return <AddTask addTask={addTask} closeForm={closeForm} />;
  } else {
    return (
      <div className="App">
        <main>
          <header className="container">
            <h1>List Task</h1>
          </header>
          <section className="container">
            <ul className="products">{itemTasks}</ul>
          </section>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={fnShowAddForm}
          >
            Add Task
          </button>
        </main>
      </div>
    );
  }
}

export default App;
