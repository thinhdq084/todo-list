import React from "react";
import "./TodoItem.css";
import { StarOutlined, StarTwoTone } from "@ant-design/icons";

function TodoList({
  taskId,
  taskName,
  taskStatus,
  isFavorite,
  onRemoveTask,
  onStatusChanged,
  onFavoriteChanged,
}) {
  let itemisFavorite = !isFavorite ? (
    <StarOutlined onClick={() => onFavoriteChanged(taskId, true)} />
  ) : (
    <StarTwoTone
      twoToneColor="#eb2f96"
      onClick={() => onFavoriteChanged(taskId, false)}
    />
  );
  return (
    <div className="row">
      <div className="colLeft">
        <div>
          <input
            className="chk"
            type="checkbox"
            checked={taskStatus}
            onChange={(x) => onStatusChanged(taskId, x.target.checked)}
          />
        </div>
        <div className="name">
          <a href="#">{taskName}</a>
          {/* <br />
          <label className="description">{description}</label> */}
        </div>
      </div>
      <div className="colRight">
        <div>{itemisFavorite}</div>
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            onClick={() => onRemoveTask(taskId)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
