import React from "react";
import TodoList from "./TodoItem";
import _ from "lodash";

function InCompleted({
  tasks,
  removeTask,
  onStatusChanged,
  onFavouriteChanged,
}) {
  return (
    <div>
      <div>
        <h4>InCompleted: {tasks.length} task</h4>
      </div>
      <ul className="listTask">
        {_.orderBy(tasks, ["favourite", "dateCreate"], ["desc", "asc"]).map(
          (task) => {
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
          }
        )}
      </ul>
    </div>
  );
}
export default InCompleted;
