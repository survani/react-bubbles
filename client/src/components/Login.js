import React, { useState } from "react";
import axiosWithAuth from "./Auth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.payload);

        // when you have handled the token, navigate to the BubblePage route
        props.history.push("/bubbles");
      })
      .catch(error => console.log("wrong credentials...", error));
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h2>Login Page</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button onClick={login}>Login</button>
      </form>
    </>
  );
};

export default Login;
