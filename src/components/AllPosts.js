import React, { useEffect, useState } from "react";

const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT`;

const AllPosts = ({
  deletePosts,
  setDeletePosts,
  token,
  username,
  posts,
  setPosts,
}) => {
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      setPosts(result.data.posts);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const deletePost = async (postID) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setDeletePosts([postID]);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [deletePosts]);
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
            {post.author.username === username ? (
              <button
                onClick={() => {
                  deletePost(post._id);
                }}
              >
                Delete Post
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default AllPosts;
