import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
const App = () => {
  let pathName = window.location.pathname;
  return (
    <>
      <div className={`${pathName == "/register" || pathName == "/login" ? "" : "sm: px-40"}`}>
        {pathName == "/register" || pathName == "/login" ? "" : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
};

export default App;
