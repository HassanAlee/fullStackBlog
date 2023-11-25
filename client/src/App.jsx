import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import NewBlog from "./pages/NewBlog";
import UpdateBlog from "./pages/UpdateBlog";
const App = () => {
  let pathName = window.location.pathname;
  return (
    <>
      <div className={`${pathName == "/register" || pathName == "/login" ? "" : "sm:px-40"}`}>
        {pathName == "/register" || pathName == "/login" ? "" : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/write-blog" element={<NewBlog />} />
            <Route path="/update-blog" element={<UpdateBlog />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
};

export default App;
