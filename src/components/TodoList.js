import React, { useEffect } from "react";
import { connect } from "react-redux";
import InCompleted from "./InCompleted";
import Completed from "./Completed";
import { getTodoList } from "../Services/TodoServices";

export function TodoList({ listTasks, isLoading, isError, loadingCount }) {
  isError = false;
  isLoading = false;
  loadingCount = 0;
  const convertDate = (time) => new Date(time).getTime();
  useEffect(() => {
    async function fetchData() {
      try {
        listTasks = (await getTodoList()).data.data.map((task) => {
          return {
            ...task,
            createdDate: convertDate(task.createdDate),
            completedDate: convertDate(task.completedDate),
          };
        });
      } catch {
        isError = true;
      } finally {
        isError = false;
        isLoading = false;
        loadingCount += 1;
      }
    }
    fetchData();
  }, [loadingCount]);

  return (
    <section className="container">
      <InCompleted tasks={[...listTasks]} />
      <Completed tasks={[...listTasks]} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    listTasks: state.todoReducers.listTasks,
    isLoading: state.todoReducers.isLoading,
    isError: state.todoReducers.isError,
    loadingCount: state.todoReducers.loadingCount,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
