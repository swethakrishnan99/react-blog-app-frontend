import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

export default function SignUp(props) {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [message, setMessage] = useState("");

  const [emailWarning, setEmailWarning] = useState("");
  const [usernameWarning, setUsernameWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://react-blog-app-backend.herokuapp.com/api/v1/users", user)
      .then((res) => {
        if (res.data.exist === true) {
          setMessage(
            "User already exist,please try to login or try another username"
          );
        } else {
          navigate(-1);
          props.setLoginTrue();
        }
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setEmailWarning("enter valid email");
      } else setEmailWarning("");
    }
    if (e.target.name === "username") {
      if (e.target.value.length <= 8 || e.target.value.length >= 16)
        setUsernameWarning("username should contain [8-16] characters");
      else setUsernameWarning("");
    }
    if (e.target.name === "password") {
      if (validatePassword(e.target.value) === null) {
        setPasswordWarning("please enter valid Password");
      }
      else setPasswordWarning("")
    }
  };

  return (
    <form className="inner-container">
      <FontAwesomeIcon icon={faUserCircle} className="get-started-icon" />
      <input
        name="username"
        type="text"
        id="userName"
        className="get-started-input"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <p className="warning">{usernameWarning}</p>
      <FontAwesomeIcon icon={faEnvelopeSquare} className="get-started-icon" />
      <input
        name="email"
        type="email"
        id="email"
        className="get-started-input"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <p className="warning">{emailWarning}</p>
      <FontAwesomeIcon icon={faUnlockAlt} className="get-started-icon" />
      <input
        name="password"
        type="password"
        id="password"
        className="get-started-input"
        title="should have min 8 and max 16 character and at least 1 uppercase, lowercase,number,special character,"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <p className="warning">{passwordWarning}</p>
      <p className="warning">{message}</p>
      <button
        type="submit"
        className="get-started-btn"
        id="submit"
        onClick={handleSubmit}
        disabled={
          !(emailWarning === "" && usernameWarning === "" && passwordWarning === "" && user.username !== "" && user.email !== "" && user.password !== "")
        }
      >
        Sign Up
      </button>
    </form >
  );
}
