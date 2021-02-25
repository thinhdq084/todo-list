import Axios from "axios";

const user = "sylk";
const apiEnpoint = "http://localhost:5000";
const getTodoEnpoint = `${apiEnpoint}/Todo/GetTodos`;
const addTodo = `${apiEnpoint}/Todo/AddTodo`;
const changeTaskCompletedStatus = `${apiEnpoint}/Todo/ChangeTaskCompletedState`;
const changeTaskFavouriteEnpoint = `${apiEnpoint}/Todo/ChangeTaskFavoriteState`;

export const getTodoList = async () => {
  return await Axios.get(
    getTodoEnpoint,
    { params: { user: user } }
    // { timeout: 2000 }
  );
};

export const addNewTask = async (taskName) => {
  return await Axios.post(
    addTodo,
    { user: user, taskName: taskName }
    // { timeout: 2000 }
  );
};

export const changeTaskStatus = async (id, isCompleted) => {
  return await Axios.post(
    changeTaskCompletedStatus,
    { taskId: id, isCompleted: isCompleted }
    // { timeout: 2000 }
  );
};

export const changeTaskFavourite = async (id, isFavorite) => {
  return await Axios.post(
    changeTaskFavouriteEnpoint,
    { taskId: id, isFavorite: isFavorite }
    // { timeout: 2000 }
  );
};

export const deleteTodo = async (listTasks, taskId) => {
  return { ...listTasks.filter((task) => task.id !== taskId) };
};
// const mapStateToProps = (state) => {
//   return {
//     listTasks: state.todoReducers.listTasks,
//   };
// };
// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(deleteTodo);
