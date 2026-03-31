import React from 'react';
import StatCard from '../../components/dashboard/StatCard';
import { FiPackage, FiShoppingCart, FiStar, FiUsers } from 'react-icons/fi';
import Order from '../../components/dashboard/Order';

const Dashboard = () => {
    return (
        <div className='min-h-screen'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                <StatCard icon={FiPackage} title="Total Products" value="245" />
                <StatCard icon={FiShoppingCart} title="Total Orders" value={128} />
                <StatCard icon={FiUsers} title="Total Users" value={573} />
                <StatCard icon={FiStar} title="Average Rating" value={4.8} />
            </div>

            <Order />
        </div>
    );
};

export default Dashboard;