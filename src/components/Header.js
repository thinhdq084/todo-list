import React, { useState } from "react";
import AddNewTask from "./AddNewTask";
import { addNewTask } from "../Services/TodoServices";

const Header = ({ setReload, reloadCount }) => {
  const [isAddError, setError] = useState(false);
  const [strMessage, setMessage] = useState("");

  let addTask = async (name) => {
    try {
      setError(false);
      if (name === "") {
        setError(true);
        setMessage("Please enter Task name.");
      } else {
        await addNewTask(name);
        setReload(reloadCount + 1);
      }
    } catch (error) {
      setError(true);
      setMessage(error.message);
    } finally {
    }
  };

  return (
    <header className="container" align="center">
      <h1 align="center">List Task</h1>
      <AddNewTask addNewTask={addTask} />
      {!isAddError ? strMessage : ""}
    </header>
  );
};

export default Header;
