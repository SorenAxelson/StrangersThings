import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const Login = () => {
  const navigate = useNavigate();
  const [username, enterUsername] = useState("");
  const [password, enterPassword] = useState("");
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
      console.log(result);
      navigate("./#");
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Enter Username</label>
        <input
          value={username}
          type="text"
          onChange={(event) => enterUsername(event.target.value)}
        ></input>
        <label>Enter Password</label>
        <input
          value={password}
          type="text"
          onChange={(event) => enterPassword(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
