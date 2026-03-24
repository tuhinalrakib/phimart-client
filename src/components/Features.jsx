import React from 'react';
import { BsCart3 } from 'react-icons/bs';

const Features = () => {
    // const gridItems = [
    //     {
    //         icons : 
    //     }
    // ]
    return (
        <section className='px-8 py-10'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <p className='text-[#f76d71]'><BsCart3 size={50}/></p>
                <h1>Free delivery</h1>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    );
};

export default Features;