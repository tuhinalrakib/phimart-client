import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Authntication/Login';
import Register from '../pages/Authntication/Register';

const Router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : "shop",
                Component : Shop
            },
            {
                path : 'login',
                Component : Login
            },
            {
                path : "register",
                element : <Register />
            }
        ]
    }
])

export default Router;