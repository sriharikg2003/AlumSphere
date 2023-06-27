import React from 'react';
import { createRoot } from "react-dom/client";
import {useState} from 'react';

import App from './components/App';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import SignIn from "./pages/SignIn";
import Connect from './pages/Connect';
import Profile from "./pages/Profile";
import Story from "./pages/Story";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },

    {
        path: "post",
        element: <App />,
    },

    {
        path: "connect",
        element: <Connect />,
    },

    {
        path: "story",
        element: <Story />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
]);



createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);