import { actionTypes } from "./actionTypes";
// increment, decrement, reset
export const getAllTodo = () => ({
  type: actionTypes.getTodo,
  payload: {},
});

export const addTodo = (taskName) => ({
  type: actionTypes.addTodo,
  payload: {
    taskName: taskName,
  },
});

export const deleteTodo = (taskId) => ({
  type: actionTypes.deleteTodo,
  payload: {
    id: taskId,
  },
});

export const changeTaskStatus = (taskId, isCompleted) => ({
  type: actionTypes.changeTaskStatus,
  payload: {
    id: taskId,
    isCompleted: isCompleted,
  },
});

export const changeTaskFavourite = (taskId, isFavorite) => ({
  type: actionTypes.changeTaskFavourite,
  payload: {
    id: taskId,
    isFavorite: isFavorite,
  },
});

export const login = (userName, passWord) => ({
  type: actionTypes.login,
  payload: {
    userName: userName,
    passWord: passWord,
  },
});

export const logout = (userName, passWord) => ({
  type: actionTypes.logout,
  payload: {},
});
