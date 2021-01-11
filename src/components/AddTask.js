import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ addNewTask, closeAddNew }) => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [taskStatus, setStatus] = useState(false);

  let linkList = () => {
    closeAddNew();
  };

  let handleAddTask = () => {
    setStatus(0);
    addNewTask(name, description, taskStatus);
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

  let onChangedDes = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <div className="addContainer">
        <h2 align = "center">Add New Task</h2>
        <div className="addRow">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name of task"
            onChange={onChangedName}
          />
        </div>
        <div className="addRow">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Enter description of task"
            onChange={onChangedDes}
          />
        </div>

        <div className="buttonRow">
          <button className = "addNewButton" type="button" onClick={handleAddTask}>
            Add
          </button>
          <button className = "addNewButton" type="button" onClick={linkList}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
