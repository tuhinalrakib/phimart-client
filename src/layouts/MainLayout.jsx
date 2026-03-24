import React from 'react';
import Navbar from '../components/UI/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/UI/Footer';

const MainLayout = () => {
    return (
        <div data-theme="light" className='nunito'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;