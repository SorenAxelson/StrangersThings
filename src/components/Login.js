import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const loginToken = {
  token: "",
};

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
      // loginToken.token = result.data.token;
      // console.log(loginToken.token);
      navigate("./#");
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
          onChange={(event) => enterUsername(event.target.value)}
        ></input>
        <label className="label">Enter Password</label>
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
// console.log(loginToken.token);
export { Login as default, loginToken };
