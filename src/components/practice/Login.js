import React, { useState } from "react";

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
    <div className="container">
      {console.log(formData)}
      <h4>Login</h4>
      <input
        name="username"
        placeholder="Username"
        className="register"
        onChange={onChangeHandler}
      />
      <br />
      <input
        name="password"
        className="register"
        placeholder="Password"
        onChange={onChangeHandler}
      />
      <br />
      <button className="register__btn" onClick={clickHandler}>
        login
      </button>
    </div>
  );
};

export default Login;
