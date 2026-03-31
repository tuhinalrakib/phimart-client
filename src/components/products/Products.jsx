import ProductItem from './ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import ErrorAlert from '../ErrorAlert';
import useFetchQuery from '../../hooks/useFetchQuery';

const Products = () => {
    const {data : productsData , isLoading, error} = useFetchQuery("products", '/products/')
    const products = productsData?.results

    return (
        <section className='max-w-7xl mx-auto py-16 bg-gray-50'>
            <div className='flex justify-between items-center '>
                <h1 className='text-3xl md:text-4xl font-bold'>Trending Products</h1>
                <a href="" className='btn btn-secondary py-4 px-8 rounded-full shadow'>View All</a>
            </div>
            {/* Spinner */}
            {
                isLoading && <div className='flex justify-center items-center my-5'><span className="loading loading-bars loading-xl"></span></div>
            }
            {/* Errors Message */}
            {
                error && <ErrorAlert message={error?.message}/>
            }
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                autoplay={{
                    delay: 4000
                }}
                className='mt-4'
            >
                {
                    products?.map(product => (
                        <SwiperSlide key={product.id} className='flex justify-center'>
                            <ProductItem product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Products;