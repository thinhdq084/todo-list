import React, { useState } from "react";
import "./AddNewTask.css";
import Button from "./Button";

const AddNewTask = ({ addNewTask, setShowAddTask }) => {
  let [name, setName] = useState("");

  let closeForm = () => {
    setShowAddTask(false);
  };

  let handleAddTask = () => {
    addNewTask(name);
    setName("");
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

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

          <div className="buttonRow">
            <Button onClick={handleAddTask} displayText="Add" />
            <Button onClick={closeForm} displayText="Back" />
          </div>
        </div>
      </div>
    );
};

export default AddNewTask;
