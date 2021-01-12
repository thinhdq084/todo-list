import React from "react";
import TodoList from "./TodoList";

function InCompleted({
  tasks,
  removeTask,
  onStatusChanged,
  onFavouriteChanged,
}) {
  let unCompletedTasks = tasks
    .filter((task) => task.status === 0)
    .sort((a, b) => b.favourite - a.favourite || a.dateCreate - b.dateCreate);

  let unCompletedComponent = [];
  if (unCompletedTasks.length > 0) {
    unCompletedComponent = unCompletedTasks.map((task) => {
      return (
        <TodoList
          key={task.taskId}
          taskId={task.taskId}
          taskName={task.taskName}
          description={task.description}
          favourite={task.favourite}
          taskStatus={task.status}
          onRemoveTask={removeTask}
          onStatusChanged={onStatusChanged}
          onFavouriteChanged={onFavouriteChanged}
        />
      );
    });
  }

  let countInCompleted = () => {
    return unCompletedTasks.length;
  };

  return (
    <div>
      <div>
        <h4>InCompleted: {countInCompleted()} task</h4>
      </div>
      <ul className="listTask">{unCompletedComponent}</ul>
    </div>
  );
}
export default InCompleted;
