import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Feed from "./Feed";
import Search from "./Search";
import Post from "./Post";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
