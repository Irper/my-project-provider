import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Profile from './Pages/Profile';
import Schedule from './Pages/Schedule';
import Map from './Pages/Map';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Header from "./Components/Header/Header";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header/>,
            children: [
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/menu",
                    element: <Menu/>
                },
                {
                    path: "/profile",
                    element: <Profile/>
                },
                {
                    path: "/schedule",
                    element: <Schedule/>
                },
                {
                    path: "/map",
                    element: <Map/>
                },

            ]
        }
    ]
)

export default router;