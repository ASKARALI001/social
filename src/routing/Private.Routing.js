import React from 'react';
import Layout from "../Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Friends from "../pages/Friends/Friends";
import MyProfile from "../pages/MyProfile/MyProfile";
import NotFound from "../pages/NotFound/NotFound";
import Notifications from "../pages/Notifications/Notifications";
import Request from "../pages/Requests/Request";
import Photos from "../pages/Photots/Photos";
import EditMyProfile from "../pages/EditMyProfile/EditMyProfile";
import Chat from "../pages/Chat/Chat";

const PrivateRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='freinds' element={<Friends/>}/>
                <Route path='myprofile' element={<MyProfile/>}/>
                <Route path='notifications' element={<Notifications/>}/>
                <Route path='request' element={<Request/>}/>
                <Route path='photos' element={<Photos/>}/>
                <Route path='editMyProfile' element={<EditMyProfile/>}/>
                <Route path='chat/*' element={<Chat/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default PrivateRouting;