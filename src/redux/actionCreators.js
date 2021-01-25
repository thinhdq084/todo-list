// increment, decrement, reset
export const getTodoList = () => ({
  type: "GET_TODO",
  payload: {},
});

export const addTodo = (taskName) => ({
  type: "ADD_TODO",
  payload: {
    taskName: taskName,
  },
});

export const deleteTodo = (taskId) => ({
  type: "DELETE",
  payload: {
    id: taskId,
  },
});

export const changeTaskStatus = (taskId, isCompleted) => ({
  type: "CHANGE_STATUS",
  payload: {
    id: taskId,
    isCompleted: isCompleted,
  },
});

export const changeTaskFavourite = (taskId, isFavorite) => ({
  type: "CHANGE_FAVOURITE",
  payload: {
    id: taskId,
    isFavorite: isFavorite,
  },
});
