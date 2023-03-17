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
  const [deletePosts, setDeletePosts] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn === false ? (
        <header id="allLinks">
          <Link className="link" to="/register">
            <div className="label">Register Now</div>
          </Link>
          <Link className="link" to="/login">
            <div className="label">Log In</div>
          </Link>
          <Link className="link" to="/posts">
            <div className="label">Listings</div>
          </Link>
        </header>
      ) : (
        <header id="allLinks">
          <Link className="link" to="/posts">
            <div className="label">Listings</div>
          </Link>
          <Link className="link" to="/profile">
            <div className="label">Your Profile</div>
          </Link>
          <Link className="link" to="/newposts">
            <div className="label">Post A Listing</div>
          </Link>
        </header>
      )}
      <Routes>
        <Route path="/#" element={<App />}></Route>
        <Route
          path="/posts"
          element={
            <AllPosts
              token={token}
              username={username}
              posts={posts}
              setPosts={setPosts}
              deletePosts={deletePosts}
              setDeletePosts={setDeletePosts}
            />
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile token={token} />}></Route>
        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              setLoggedIn={setLoggedIn}
              setToken={setToken}
            />
          }
        ></Route>
        <Route path="/newposts" element={<NewPosts token={token} />}></Route>
      </Routes>
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
