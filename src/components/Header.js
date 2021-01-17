import React, { useState } from "react";
import Button from "./Button";
import AddNewTask from "./AddNewTask";
// import { ToutchableOpacity } from "react-native";

const Header = ({ addNewTask }) => {
  let [showAddTask, setShowAddTask] = useState(false);

  let fnShowAddTask = () => {
    setShowAddTask(true);
  };

  let closeForm = () => {
    setShowAddTask(false);
  };

  return (
    <header className="container" align="center">
      <h1 align="center">List Task</h1>
      {showAddTask ? (
        <AddNewTask addNewTask={addNewTask} setShowAddTask={closeForm} />
      ) : (
        <div className="buttonRow">
          <Button onClick={fnShowAddTask} displayText="Add Task" />
        </div>
      )}
    </header>
  );
};

export default Header;
