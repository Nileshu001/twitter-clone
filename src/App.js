import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./page/Login/Login";
import Home from "./page/Home";
import Signup from './page/Login/Signup';
import ProtectedRoute from "./page/ProtectedRoute";
import PageLoading from "./page/PageLoading";
import Feed from "./page/Feed/Feed";
import Explore from "./page/Explore/Explore";
import Notifications from "./page/Notifications/Notifications";
import Messages from "./page/Messages/Messages";
import Bookmarks from "./page/Bookmarks/Bookmarks";
import Lists from "./page/Lists/Lists";
import Profile from "./page/Profile/Profile";
import More from "@mui/icons-material/More";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} >
          <Route index element={<Feed />} />
        </Route>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
          <Route path="feed" element={<Feed />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="profile" element={<Profile />} />
          <Route path="lists" element={<More />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/page-loading" element={<PageLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
