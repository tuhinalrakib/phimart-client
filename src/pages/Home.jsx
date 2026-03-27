import React from 'react';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Features from '../components/Features';
import Products from '../components/products/Products';
import Discount from '../components/discount/Discount';
import Categories from '../components/categories/Categories';

const Home = () => {
    return (
        <div data-thee className='min-h-screen nunito'>
            <HeroCarousel />
            <Features />
            <Products />
            <Discount/>
            <Categories />
        </div>
    );
};

export default Home;