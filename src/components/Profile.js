import React, { useEffect, useState } from "react";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const Profile = ({ token }) => {
  const [userInfo, setUserInfo] = useState({});
  const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/jsonz",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setUserInfo(result.data);
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
      {userInfo.posts !== undefined
        ? userInfo.posts.map((post) => {
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
          })
        : null}
      {userInfo.messages !== undefined
        ? userInfo.messages.map((message) => {
            return (
              <div id="userMessages">
                <label className="label">Messages</label>
                <h1>{message.post.title}</h1>
                <p>{message.content}</p>
                <p>{message.fromUser.username}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Profile;
