import React from "react";
import TodoItem from "./TodoItem";
import _ from "lodash";
import {
  changeTaskStatus,
  changeTaskFavourite,
  deleteTodo,
} from "../Services/TodoServices";

function Completed({ tasks }) {
  return (
    <div>
      <div>
        <h4>
          InCompleted: {[...tasks.filter((task) => !task.isCompleted)].length}{" "}
          task
        </h4>
      </div>
      <ul className="listTask">
        {_.orderBy(
          [...tasks.filter((task) => !task.isCompleted)],
          ["isFavorite", "createdDate"],
          ["desc", "asc"]
        ).map((task) => {
          return (
            <TodoItem
              key={task.id}
              taskId={task.id}
              taskName={task.taskName}
              description={task.description}
              isFavorite={task.isFavorite}
              taskStatus={task.isCompleted}
              onRemoveTask={() => deleteTodo(tasks, task.id)}
              onStatusChanged={() =>
                changeTaskStatus(task.id, !task.isCompleted)
              }
              onFavoriteChanged={() =>
                changeTaskFavourite(task.id, !task.isFavorite)
              }
            />
          );
        })}
      </ul>
    </div>
  );
}
export default Completed;
