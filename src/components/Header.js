import React, { useState } from "react";
import AddNewTask from "./AddNewTask";

const Header = ({ addNewTask }) => {

  return (
    <header className="container" align="center">
      <h1 align="center">List Task</h1>
        <AddNewTask addNewTask={addNewTask}/>
    </header>
  );
};

export default Header;
