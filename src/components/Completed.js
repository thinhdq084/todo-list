import React from "react";
import TodoList from "./TodoItem";

function Completed({ tasks, removeTask, onStatusChanged, onFavouriteChanged }) {
  let completedTasks = tasks
    .filter((task) => task.status === 1)
    .sort(
      (a, b) => b.dateCompleted - a.dateCompleted || b.favourite - a.favourite
    );

  let completedComponent = [];
  if (completedTasks.length > 0) {
    completedComponent = completedTasks.map((task) => {
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

  let countCompleted = () => {
    return completedTasks.length;
  };

  return (
    <div>
      <div>
        <h4>Completed: {countCompleted()} task</h4>
      </div>
      <ul className="listTask">{completedComponent}</ul>
    </div>
  );
}
export default Completed;
