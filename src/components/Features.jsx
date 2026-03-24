import React from 'react';
import { BiShieldPlus } from 'react-icons/bi';
import { BsAward, BsCart3 } from 'react-icons/bs';
import { GoTag } from 'react-icons/go';

const Features = () => {
    const gridItems = [
        {
            icons: <BsCart3 size={50} />,
            title: "Free delivery",
            descriptions: "Consectetur adipi elit lorem ipsum dolor sit amet."
        },
        {
            icons: <BsAward size={50} />,
            title: "Quality guarantee",
            descriptions: "Dolor sit amet orem ipsu mcons ectetur adipi elit."
        },
        {
            icons: <GoTag size={50} />,
            title: "Daily offers",
            descriptions: "Amet consectetur adipi elit loreme ipsum dolor sit."
        },
        {
            icons: <BiShieldPlus size={50} />,
            title: "100% secure payment",
            descriptions: "Rem Lopsum dolor sit amet, consectetur adipi elit."
        }
    ]
    return (
        <section className='px-2 md:px-8 h-auto my-20 md:my-3 flex justify-center items-center'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
                {
                    gridItems.map((item, i) => (
                        <div className='flex flex-col md:flex-row gap-4'>
                            <p className='text-[#f76d71]'>{item.icons}</p>
                            <div>
                                <h1 className='text-xl font-semibold mb-1'>{item.title}</h1>
                                <p className='text-lg'>{item.descriptions}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Features;