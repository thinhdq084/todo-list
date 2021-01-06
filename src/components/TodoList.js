import React from "react";
import classes from "./TodoList.module.css";

function Task({ taskName, description, taskStatus, onRemoveProduct }) {
  return (
    <li className={classes.row}>
      <div className={classes.colLeft}>
        <div>
          <input id="todo-1" type="checkbox" className={classes.chk} />
        </div>
        <div className={classes.detail}>
          <div className={classes.detailName}>
            <a href="#">{taskName}</a>
          </div>
          <div className={classes.taskDescriptionDisplay}>{description}</div>
        </div>
      </div>
      <div className={classes.colRight}>
        <div className={classes.remove}>
          <svg
            version="1.1"
            className={classes.close}
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            onClick={() => onRemoveProduct(taskName)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  );
}

export default Task;
