import React, { useState } from "react";
// import App from "../../App";
import "../../dist/css/register.css";

const Practice = () => {
  const [formData, setFormData] = useState();

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onRegisterHandler = () => {
    console.log(formData);
    if (formData === undefined) {
      alert("form data no dey");
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
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
        <h4 className="page-title">Sign Up</h4>
        <input
          name="username"
          placeholder="Username"
          className="register"
          onChange={onChangeHandler}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="register"
          onChange={onChangeHandler}
        />
        <br />
        <button className="register__btn" onClick={onRegisterHandler}>
          Sign up
        </button>
      </div>
    </React.Fragment>
  );
};

export default Practice;
