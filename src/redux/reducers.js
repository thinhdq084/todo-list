import { combineReducers } from "redux";
import {
  getTodoList,
  addNewTask,
  changeTaskStatus,
  changeTaskFavourite,
} from "../Services/TodoServices";

const convertDate = (time) => new Date(time).getTime();

const getAllTodo = async () => {
  (await getTodoList()).data.data.map((task) => {
    return {
      ...task,
      createdDate: convertDate(task.createdDate),
      completedDate: convertDate(task.completedDate),
    };
  });
};

// const todoReducers =
async function todoReducers(state = { listTasks: [] }, action) {
  switch (action.type) {
    case "GET_TODO": {
      return { ...state, listTasks: await getAllTodo() };
    }
    case "ADD_TODO": {
      try {
        await addNewTask(action.payload.taskName);
      } catch {
      } finally {
        return { ...state, listTasks: await getAllTodo() };
      }
    }
    case "CHANGE_STATUS": {
      try {
        await changeTaskStatus(state.id, action.payload.isCompleted);
      } catch {
      } finally {
        return { ...state, listTasks: await getAllTodo() };
      }
    }
    case "CHANGE_FAVOURITE": {
      try {
        await changeTaskFavourite(state.id, action.payload.isCompleted);
      } catch {
      } finally {
        return { ...state, listTasks: await getAllTodo() };
      }
    }
    case "DELETE": {
      return {
        ...state,
        listTasks: {
          ...state.listTasks.filter((task) => task.id !== state.todoItem.id),
        },
      };
    }
    default:
      return { ...state, listTasks: await getAllTodo() };
  }
}

export default combineReducers({ todoReducers });
