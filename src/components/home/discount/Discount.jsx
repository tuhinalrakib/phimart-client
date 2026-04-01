import React, { useEffect, useState } from 'react';
import BannerImage from '../../../assets/images/banner-image3.png'
import BGImage from "../../../assets/images/banner-image-bg-1.jpg"

const Discount = () => {
    const targetDate = new Date().getTime() + 1000 * 24 * 60 * 60 * 25
    const getTimeRemaining = () => {
        const now = new Date().getTime()
        const difference = targetDate - now
        return {
            days: Math.floor(difference / (24 * 1000 * 60 * 60)),
            hours: Math.floor((difference / (1000 * 60 * 60))% 24),
            min: Math.floor((difference / (1000 * 60)) % 60),
            sec: Math.floor((difference / 1000)%60)
        }
    }
   
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, min, sec } = prev;

                if (sec > 0) {
                    sec--
                } else {
                    if (min > 0) {
                        min--
                        sec = 59
                    } else {
                        if (hours > 0) {
                            hours--
                            min = 59
                            sec = 59
                        } else {
                            if (days > 0) {
                                days--
                                hours = 23
                                min = 59
                                sec = 59
                            }
                        }
                    }
                }
                return { days, hours, min, sec }
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section
            className='py-20'
            style={{
                backgroundImage: `url(${BGImage})`
            }}>
            <div className='max-w-6xl mx-auto flex justify-around items-center gap-20 '>
                <div className='w-1/2'>
                    <img src={BannerImage} alt="banner Image" className='w-full h-full' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-7xl font-semibold'>30% Discount on all items. Hurry Up !!!</h1>
                    <div className='flex items-center gap-5 mt-10'>
                        <div>
                            <h4 className='text-5xl font-semibold mb-2'>{timeLeft.days}</h4>
                            <h5>Days</h5>
                        </div>
                        <span className='text-[#f76d71] text-4xl font-bold'> : </span>
                        <div>
                            <h4 className='text-5xl font-semibold mb-2'>{timeLeft.hours}</h4>
                            <h5>Hrs</h5>
                        </div>
                        <span className='text-[#f76d71] text-4xl font-bold'> : </span>
                        <div>
                            <h4 className='text-5xl font-semibold mb-2'>{timeLeft.min}</h4>
                            <h5>Min</h5>
                        </div>
                        <span className='text-[#f76d71] text-4xl font-bold'> : </span>
                        <div>
                            <h4 className='text-5xl font-semibold mb-2'>{timeLeft.sec}</h4>
                            <h5>Sec</h5>
                        </div>
                    </div>
                    <button className='btn bg-[#f76d71] py-7 px-10 mt-10 text-[#ffffe8] text-xl font-semibold rounded-full'>Shop Collection</button>
                </div>
            </div>
        </section>
    );
};

export default Discount;