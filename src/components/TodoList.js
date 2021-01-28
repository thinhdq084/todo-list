import React, { useEffect } from "react";
import { connect } from "react-redux";
import InCompleted from "./InCompleted";
import Completed from "./Completed";
import { getTodoList } from "../redux/actionCreators";

export function TodoList({ listTasks, loadingCount, isError, getTodoList }) {
  useEffect(() => {
    function fetchData() {
      listTasks = getTodoList();
    }
    fetchData();
  }, [loadingCount]);

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
    listTasks: state.TodoReducers.listTasks,
    loadingCount: state.TodoReducers.loadingCount,
    isError: state.TodoReducers.isError,
  };
};
const mapDispatchToProps = { getTodoList };
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
