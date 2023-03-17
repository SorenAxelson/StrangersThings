import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const registerToken = {
  token: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
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
      navigate("./#");
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="registerForm">
      <form onSubmit={registerUser}>
        <label className="label">Register new Username</label>
        <input
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <label className="label">Register new Password</label>
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
export { Register as default, registerToken };
