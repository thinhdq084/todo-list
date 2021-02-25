import { combineReducers } from "redux";
import { actionTypes } from "./actionTypes";
import { getUsers } from "../Services/ListUser";

const initialState = {
  listTasks: [],
  isError: false,
  isLoading: false,
  loadingCount: 0,
  userName: "",
  passWord: "",
  isLogin: false,
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login: {
      if (
        getUsers().find(
          (u) =>
            u.userName === action.payload.userName &&
            u.passWord === action.payload.passWord
        )
      ) {
        return {
          ...state,
          userName: action.payload.userName,
          passWord: action.payload.passWord,
          isLogin: true,
        };
      }

      return {
        ...state,
        userName: "",
        passWord: "",
        isLogin: false,
      };
    }
    case actionTypes.logout: {
      return {
        ...state,
        userName: "",
        passWord: "",
        isLogin: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({ todoReducers });
