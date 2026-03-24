import React from 'react';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Features from '../components/Features';

const Home = () => {
    return (
        <div data-thee className='min-h-screen nunito'>
            <HeroCarousel />
            <Features />
        </div>
    );
};

export default Home;