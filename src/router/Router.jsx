import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Authntication/Login';
import Register from '../pages/Authntication/Register';
import PrivateRoute from '../components/privateRoutes/PrivateRoute';
import ActivateAccount from '../components/registration/ActivateAccount';
import DashboardLayout from '../layouts/DashboardLayout';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "shop",
                Component: Shop
            },
            {
                path : "shop/:id",
                element : <ProductDetail />
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "activate/:uid/:token",
                element: <ActivateAccount />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                index : true,
                element : <Dashboard />
            },
            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path : "cart",
                element : <Cart />
            }
        ]
    },

])

export default Router;