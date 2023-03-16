import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AllPosts from "./components/AllPosts";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NewPosts from "./components/NewPosts";
const App = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/#" element={<App />}></Route>
        <Route path="/posts" element={<AllPosts />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/newposts" element={<NewPosts />}></Route>
      </Routes>
      <Link to="/register">Register Now</Link>
      <Link to="/login">Log In</Link>
      <Link to="/profile">Your Profile</Link>
      <Link to="/#">Home</Link>

      <AllPosts posts={posts} setPosts={setPosts} />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
