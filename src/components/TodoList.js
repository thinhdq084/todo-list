import React from "react";
import { connect } from "react-redux";
import InCompleted from "./InCompleted";
import Completed from "./Completed";
import { getTodoList } from "../redux/actionCreators";

export function TodoList({ listTasks, getTodoList }) {
  return (
    <section className="container">
      <InCompleted tasks={[...listTasks.filter((task) => !task.isCompleted)]} />
      <Completed tasks={[...listTasks.filter((task) => task.isCompleted)]} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    // listTasks: getTodoList(),
    listTasks: state.todoReducers.getTodoList(),
    // listTasks: state.todoReducers.listTasks,
  };
};
const mapDispatchToProps = { getTodoList };
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
