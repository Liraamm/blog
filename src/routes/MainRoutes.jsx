import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import AddBlog from "../pages/AddBlog";
import Favorites from "../pages/Favorites";
import BlogInfo from "../pages/BlogInfo";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bloginfo" element={<BlogInfo />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
