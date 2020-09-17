import React, { useState } from "react";
import "../../dist/css/register.css";

const Login = ({ appState, setAppState }) => {
  const [formData, setFormData] = useState({
    username: null,
    password: null,
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clickHandler = () => {
    const localUser = localStorage.getItem("user");
    const userName = JSON.parse(localUser).username;
    const passWord = JSON.parse(localUser).password;
    if (userName !== formData.username) {
      alert("please input correct username");
      //   console.log("local store", JSON.parse(localUser).username);
    } else if (passWord !== formData.password) {
      alert("please input correct password");
    } else {
      setAppState({ isLoggedIn: true });
    }
  };
  return (
    <React.Fragment>
      <div className="brand-div">
        <img
          className="brand-img"
          src={require("../../asset/book.png")}
          alt="icon"
        />{" "}
        <span className="brand">DevNote</span>
      </div>
      <div className="container">
        {console.log(formData)}
        <div>
          <img src={require("../../asset/undraw_book.png")} alt="icon" />
        </div>
        <h4 className="page-title">Login</h4>
        <input
          name="username"
          placeholder="Username"
          className="register"
          onChange={onChangeHandler}
        />
        <br />
        <input
          name="password"
          type="password"
          className="register"
          placeholder="Password"
          onChange={onChangeHandler}
        />
        <br />
        <button className="register__btn" onClick={clickHandler}>
          Login
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
