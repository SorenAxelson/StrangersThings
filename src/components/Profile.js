import React, { useEffect } from "react";
const Profile = () => {
  const resultHolder = {};
  const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
      });
      const result = await response.json();
      console.log(result);
      resultHolder = result;
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="profilePage">
      <h1>{resultHolder.username}</h1>
      <div>{resultHolder.posts}</div>
      <div>{resultHolder.messages}</div>
    </div>
  );
};
export default Profile;
