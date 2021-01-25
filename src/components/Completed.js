import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import _ from "lodash";
import {
  changeTaskStatus,
  changeTaskFavourite,
  deleteTodo,
} from "../redux/actionCreators";

function Completed({
  tasks,
  changeTaskStatus,
  changeTaskFavourite,
  deleteTodo,
}) {
  return (
    <div>
      <div>
        <h4>Completed: {tasks.length} task</h4>
      </div>
      <ul className="listTask">
        {_.orderBy(
          tasks,
          ["completedDate", "isFavorite"],
          ["desc", "desc"]
        ).map((task) => {
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
        })}
      </ul>
    </div>
  );
}
// export default Completed;

const mapStateToProps = (state) => {
  // return {
  //   listTasks: state.todoReducers.getTodoList,
  // };
};
const mapDispatchToProps = {
  deleteTodo,
  changeTaskStatus,
  changeTaskFavourite,
};
export default connect(null, {
  mapStateToProps,
  mapDispatchToProps,
})(Completed);
