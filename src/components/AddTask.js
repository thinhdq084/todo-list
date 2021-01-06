import { useState } from "react";
import App from "../App";

function AddTask({ addTask, closeForm }) {
  let [showTaskList, setShowTaskList] = useState(0);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [taskStatus, setStatus] = useState(0);

  let linkList = () => {
    setShowTaskList(true);
    closeForm();
  };

  let handleAddTask = () => {
    setStatus(0);
    addTask(name, description, taskStatus);
    // linkList();
  };

  let onChangedName = (e) => {
    setName(e.target.value);
  };

  let onChangedDes = (e) => {
    setDescription(e.target.value);
  };

  if (showTaskList === true) {
    return <App />;
  } else {
    return (
      <div className="container">
        <h2>Add New Task</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="taskName"
            placeholder="Enter name of task"
            onChange={onChangedName}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="taskDes"
            placeholder="Enter description of task"
            onChange={onChangedDes}
          />
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
    );
  }
}

export default AddTask;
