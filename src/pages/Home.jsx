import React from 'react';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Features from '../components/Features';
import Products from '../components/products/Products';
import Discount from '../components/discount/Discount';

const Home = () => {
    return (
        <div data-thee className='min-h-screen nunito'>
            <HeroCarousel />
            <Features />
            <Products />
            <Discount/>
        </div>
    );
};

export default Home;