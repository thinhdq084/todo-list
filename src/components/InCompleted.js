import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import _ from "lodash";
import {
  changeTaskStatus,
  changeTaskFavourite,
  deleteTodo,
} from "../redux/actionCreators";

function InCompleted({
  tasks,
  changeTaskStatus,
  changeTaskFavourite,
  deleteTodo,
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
              <TodoItem
                key={task.id}
                taskId={task.id}
                taskName={task.taskName}
                description={task.description}
                isFavorite={task.isFavorite}
                taskStatus={task.isCompleted}
                onRemoveTask={deleteTodo}
                onStatusChanged={changeTaskStatus}
                onFavoriteChanged={changeTaskFavourite}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = () => {
};
const mapDispatchToProps = {
  deleteTodo,
  changeTaskStatus,
  changeTaskFavourite,
};
export default connect(null, {
  mapStateToProps,
  mapDispatchToProps,
})(InCompleted);
