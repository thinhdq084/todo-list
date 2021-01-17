import Axios from "axios";

const user = "sylk";
const apiEnpoint = "http://localhost:5000";
const getTodoEnpoint = `${apiEnpoint}/Todo/GetTodos`;
const addTodo = `${apiEnpoint}/Todo/AddTodo`;
const changeTaskCompletedStatus = `${apiEnpoint}/Todo/ChangeTaskCompletedState`;
const changeTaskFavouriteEnpoint = `${apiEnpoint}/Todo/ChangeTaskFavoriteState`;

export const getTodoList = async () => {
  return await new Promise(async (resolve) => {
    resolve(
      await Axios.get(
        getTodoEnpoint,
        { params: { user: user } },
        { timeout: 2000 }
      ).then((response) => {
        return response.data;
      })
    );
  });
};

export const addNewTask = async (taskName) => {
  return await new Promise(async (resolve) => {
    resolve(
      await Axios.post(
        addTodo,
        { user: user, taskName: taskName },
        { timeout: 2000 }
      ).then((response) => {
        return response.data;
      })
    );
  });
};

export const changeTaskStatus = async (id, isCompleted) => {
  return await new Promise(async (resolve) => {
    resolve(
      await Axios.post(
        changeTaskCompletedStatus,
        { taskId: id, isCompleted: isCompleted },
        { timeout: 2000 }
      ).then((response) => {
        return response.data;
      })
    );
  });
};

export const changeTaskFavourite = async (id, isFavorite) => {
  return await new Promise(async (resolve) => {
    resolve(
      await Axios.post(
        changeTaskFavouriteEnpoint,
        { taskId: id, isFavorite: isFavorite },
        { timeout: 2000 }
      ).then((response) => {
        return response.data;
      })
    );
  });
};
