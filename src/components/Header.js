import React, { useState } from "react";
import { connect } from "react-redux";
import AddNewTask from "./AddNewTask";
import { addNewTask } from "../Services/TodoServices";
import { logout } from "../redux/actionCreators";

const Header = ({ setReload, reloadCount, logout }) => {
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
      <div>
        <h1 align="center">List Task</h1>
        <label onClick={() => logout()}>Logout</label>
      </div>
      <div>
        <AddNewTask addNewTask={addTask} />
        {!isAddError ? strMessage : ""}
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {};
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
