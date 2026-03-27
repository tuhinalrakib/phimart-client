import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

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
            }
        ]
    }
])

export default Router;