import React from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../UI/Loader';
import useAuthContext from '../../hooks/useAuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;