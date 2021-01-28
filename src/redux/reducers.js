// import { useEffect } from "react";
import { combineReducers } from "redux";
import {
  getTodoList,
  addNewTask,
  changeTaskStatus,
  changeTaskFavourite,
} from "../Services/TodoServices";

async function TodoReducers(
  state = { listTasks: [], isError: false, isLoading: false, loadingCount: 0 },
  action
) {
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

  // useEffect(() => {
  //   async function fetchData() {
  //     state.listTasks = await getAllTodo();
  //   }
  //   fetchData();
  // }, [state.loadingCount]);

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

export default combineReducers({ TodoReducers });
