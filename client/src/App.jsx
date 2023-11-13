import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Header>
    </>
  )
};

export default App;
