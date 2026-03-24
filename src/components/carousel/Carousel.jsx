
import BgImage from '../../assets/images/banner-image-bg.jpg'

const Carousel = ({title,subtitle,image}) => {
    return (
        <section className='w-full ' 
        style={{
                backgroundImage : `url(${BgImage})`
            }}
        >
            <div 
            className='flex gap-2 md:gap-10 flex-col-reverse md:flex-row items-center h-auto md:h-162.5 px-4 md:px-8 pt-5 pb-14 md:py-14 bg-cover bg-center justify-center max-w-6xl mx-auto'
            
            >
                <div className='w-full md:w-1/2 flex flex-col items-center justify-center md:justify-items-start md:items-start md:flex-none'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#262626] '>{title}</h1>
                    <p className='text-gray-600 my-4'>{subtitle}</p>
                    <button className='py-4 text-xl px-7 rounded-4xl text-white bg-[#f76d71] shadow-md drop-shadow-md cursor-pointer'>Shop Collection</button>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img 
                    className='max-w-md drop-shadow-lg' 
                    src={image} 
                    alt="Book" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Carousel;
