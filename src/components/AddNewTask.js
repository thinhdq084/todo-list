import React, { useState } from "react";
import "./AddNewTask.css";

const AddNewTask = ({ addNewTask }) => {
  let [name, setName] = useState("");

  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addNewTask(name);
      setName("");
    }
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div className="addContainer">
        <div className="addRow">
          <input
            type="text"
            placeholder="Enter name of task"
            value={name}
            onChange={onChangedName}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
