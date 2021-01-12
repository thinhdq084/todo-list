import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ addNewTask, closeAddNew }) => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [showAddTask, setShowAddTask] = useState(false);

  let fnShowAddTask = () => {
    setShowAddTask(true);
  };

  let closeForm = () => {
    setShowAddTask(false);
  };

  // let linkList = () => {
  //   closeAddNew();
  // };

  let handleAddTask = () => {
    addNewTask(name, description);
    setName("");
    setDescription("");
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

  let onChangedDes = (e) => {
    setDescription(e.target.value);
  };

  // let itemAddTask = "";

  // if (showAddTask === true) {
  //   itemAddTask = <AddTask addNewTask={addTask} closeAddNew={closeForm} />;
  // } else {
  //   itemAddTask = (
  //     <div className="buttonRow">
  //       <button className="addNewButton" onClick={fnShowAddTask}>
  //         Add Task
  //       </button>
  //     </div>
  //   );
  // }

  if (showAddTask === true) {
    return (
      <div>
        <div className="addContainer">
          <h2 align="center">Add New Task</h2>
          <div className="addRow">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter name of task"
              value={name}
              onChange={onChangedName}
            />
          </div>
          <div className="addRow">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter description of task"
              value={description}
              onChange={onChangedDes}
            />
          </div>

          <div className="buttonRow">
            <button
              className="addNewButton"
              type="button"
              onClick={handleAddTask}
            >
              Add
            </button>
            <button className="addNewButton" type="button" onClick={closeForm}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="buttonRow">
        <button className="addNewButton" onClick={fnShowAddTask}>
          Add Task
        </button>
      </div>
    );
  }
};

export default AddTask;
