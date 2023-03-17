import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const Login = ({ username, setUsername, setToken, setLoggedIn }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const loginUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });

      const result = await response.json();
      if (result.success === true) {
        setLoggedIn(true);
        setToken(result.data.token);
        window.localStorage.setItem("token", result.data.token);
        navigate("./#");
      }
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="loginForm">
      <form onSubmit={loginUser}>
        <label className="label">Enter Username</label>
        <input
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <label className="label">Enter Password</label>
        <input
          value={password}
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
