import React, { useEffect, useState } from "react";
import getToken from "./context";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;
const TOKEN_STRING_HERE = getToken();

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/jsonz",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
      });
      const result = await response.json();
      console.log(result);
      setUserInfo(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <div id="profilePage">
      {userInfo.posts.map((post) => {
        return (
          <div className="post">
            <label className="label">Your Posts</label>
            <h1>{post.title}</h1>
            <strong>{post.price}</strong>
            <p>{post.author.username}</p>
            <p>{post.location}</p>
            <p>{post.description}</p>
          </div>
        );
      })}
      {userInfo.messages.map((message) => {
        return (
          <div id="userMessages">
            <label className="label">Messages</label>
            <h1>{message.post.title}</h1>
            <p>{message.content}</p>
            <p>{message.fromUser.username}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Profile;
