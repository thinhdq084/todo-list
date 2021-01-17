import React from "react";
import TodoList from "./TodoItem";
import _ from "lodash";

function InCompleted({
  tasks,
  removeTask,
  onStatusChanged,
  onFavoriteChanged,
}) {
  return (
    <div>
      <div>
        <h4>InCompleted: {tasks.length} task</h4>
      </div>
      <ul className="listTask">
        {_.orderBy(tasks, ["isFavorite", "createdDate"], ["desc", "asc"]).map(
          (task) => {
            return (
              <TodoList
                key={task.id}
                taskId={task.id}
                taskName={task.taskName}
                description={task.description}
                isFavorite={task.isFavorite}
                taskStatus={task.isCompleted}
                onRemoveTask={removeTask}
                onStatusChanged={onStatusChanged}
                onFavoriteChanged={onFavoriteChanged}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}
export default InCompleted;
