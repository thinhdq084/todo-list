import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { login } from "../redux/actionCreators";

function Login({ isLogin, login }) {
  let [errorMessage, setMessage] = useState("");
  let [loginUser, setUser] = useState("");
  let [loginPass, setPass] = useState("");
  let history = useHistory();

  function handleClick() {
    login(loginUser, loginPass);
    if (isLogin !== true) {
      setMessage("Đăng nhập thất bại.");
    } else {
      history.push("/home");
    }
  }

  let onChangedUserName = (e) => {
    setUser(e.target.value);
  };

  let onChangedPassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="mainLogin">
      <main>
        <div className="loginRow">
          <label>Tên đăng nhập:</label>
          <input
            className="inputLogin"
            type="text"
            placeholder="Tên đăng nhập"
            value={loginUser}
            onChange={onChangedUserName}
          />
        </div>
        <div className="loginRow">
          <label>Mật khẩu:</label>
          <input
            className="inputLogin"
            type="text"
            placeholder="Mật khẩu"
            value={loginPass}
            onChange={onChangedPassword}
          />
        </div>
        <div className="loginRow">
          <label>{errorMessage}</label>
        </div>
        <div className="loginRow">
          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogin: state.todoReducers.isLogin,
  };
};
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
