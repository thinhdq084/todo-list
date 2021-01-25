import React, { useState } from "react";
import { connect } from "react-redux";
import "./AddNewTask.css";
import { addTodo } from "../redux/actionCreators";

const AddNewTask = ({ addNewTask }) => {
  let [name, setName] = useState("");

  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(name);
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
