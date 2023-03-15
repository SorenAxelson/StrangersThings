import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const Login = () => {
  const [username, checkUsername] = useState("");
  const [password, checkPassword] = useState("");
  const navigate = useNavigate();
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
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input
          value={username}
          type="text"
          onChange={(event) => checkUsername(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          value={password}
          type="text"
          onChange={(event) => checkPassword(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
