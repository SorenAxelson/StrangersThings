import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import AllPosts from "./components/AllPosts";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NewPosts from "./components/NewPosts";

const App = () => {
  return (
    <div>
      <header id="allLinks">
        <Link className="link" to="/register">
          <div className="label">Register Now</div>
        </Link>
        <Link className="link" to="/login">
          <div className="label">Log In</div>
        </Link>
        <Link className="link" to="/profile">
          <div className="label">Your Profile</div>
        </Link>
        <Link className="link" to="/posts">
          <div className="label">Listings</div>
        </Link>
        <Link className="link" to="/newposts">
          <div className="label">Post A Listing</div>
        </Link>
      </header>
      <Routes>
        <Route path="/#" element={<App />}></Route>
        <Route path="/posts" element={<AllPosts />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/newposts" element={<NewPosts />}></Route>
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
