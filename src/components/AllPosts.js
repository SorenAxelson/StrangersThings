import React, { useEffect, useState } from "react";

const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      console.log(result);
      setPosts(result.data.posts);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div id="allPosts">
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <h1>{post.title}</h1>
            <strong>{post.price}</strong>
            <p>{post.author.username}</p>
            <p>{post.location}</p>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AllPosts;
