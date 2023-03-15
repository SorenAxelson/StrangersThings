import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // username is set to an empty string, setUsername is set to a
  // function which updates the string
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
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result);
      navigate("./#");
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Register new Username</label>
        <input
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <label>Register new Password</label>
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
export default Register;
