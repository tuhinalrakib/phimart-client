import React from 'react';
import { NavLink } from 'react-router';
import logo from "../../assets/images/logo.png"
import useAuthContext from '../../hooks/useAuthContext';

const Navbar = () => {
    const { user, loading, logoutUser } = useAuthContext()

    const Links = (
        <>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `btn ${isActive ? "btn-secondary" : "btn-info"} cursor-pointer rounded-md hover:bg-blue-500 duration-800`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/service'
                    className={({ isActive }) =>
                        `btn ${isActive ? "btn-secondary" : "btn-info"} cursor-pointer rounded-lg hover:bg-blue-500 duration-800`
                    }
                >
                    Service
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/shop'
                    className={({ isActive }) =>
                        `btn ${isActive ? "btn-secondary" : "btn-info"} cursor-pointer rounded-md hover:bg-blue-500 duration-800`
                    }
                >
                    Shop
                </NavLink>
            </li>
        </>
    )

    return (
        <div className="navbar bg-gray-200 shadow-md w-full fixed top-0 lft-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <div className='flex items-center justify-center'>
                        <img
                            width={30}
                            height={30}
                            src={logo} alt="logo"
                            loading='lazy'
                            className='rounded'
                        />
                        phimart
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end space-x-1 md:space-x-3">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body bg-base-200">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    loading 
                    ?
                    " "
                    :
                    user
                        ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li>
                                    <a onClick={logoutUser}>Logout</a>
                                </li>
                            </ul>
                        </div>
                        :
                        <>
                            <NavLink to="/login" className="btn sm:btn-sm btn-secondary">Login</NavLink>
                            <NavLink to="/register" className="btn sm:btn-sm btn-secondary">Register</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;