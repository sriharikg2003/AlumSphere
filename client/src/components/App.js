import SignIn from "../pages/SignIn";
import Connect from '../pages/Connect';
import Profile from "../pages/Profile";
import Story from "../pages/Story";
import Admin from "../pages/Admin";
import SignUp from '../pages/SignUp';
import React from "react";
import NoPage from "../pages/NoPage";
import MainLayout from "../Layout/MainLayout";
import GalleryPage from "../pages/GalleryPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Story del="user" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="connect" element={<Connect />} />
              <Route path="*" element={<NoPage />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="gallery" element={<GalleryPage />} />
            </Route>
    
            <Route path="admin" element={<MainLayout />}>
              <Route index element={<Story />} />
              <Route path="signin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
};


export default App;