import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

export default function SignIn(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("https://react-blog-app-backend.herokuapp.com/api/v1/users/login", user)
      .then((res) => {
        if (res.data.match === false)
          setMessage("Incorrect password, Please try again");
        else {
          navigate(-1);
          props.setLoginTrue();
        }
      })
      .catch((error) => {
        console.log(error);
        const errorData = error.response;
        if (errorData.status === 400)
          setMessage("No account found for this username. Retry, or Sign up.");
        else setMessage("Something went wrong, Please try again");
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form className="inner-container" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faUserCircle} className="get-started-icon" />
      <input
        name="username"
        type="text"
        id="userName"
        className="get-started-input"
        placeholder="Username or email"
        value={user.username}
        required
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faUnlockAlt} className="get-started-icon" />
      <input
        name="password"
        type="password"
        className="get-started-input"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      <p className="warning">{message}</p>
      <button
        type="submit"
        className="get-started-btn"
        id="submit"
        disabled={user.username === "" || user.password === ""}
      >
        Sign In
      </button>
    </form>
  );
}
