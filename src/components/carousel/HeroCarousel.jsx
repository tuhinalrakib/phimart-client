import { Swiper, SwiperSlide } from 'swiper/react';
import Book from "../../assets/images/banner-image2.png"
import MatBook from "../../assets/images/banner-image1.png"
import HeartBook from "../../assets/images/banner-image.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Carousel from './Carousel';
const HeroCarousel = () => {
    const carouselItems = [
        {
            title: "The Fine Print Book Collection",
            subtitle: "Best Offer Save 30%. Grab it now",
            image: `${Book}`
        },
        {
            title: "How Innovation Works",
            subtitle: "Discount available. Grab it now",
            image: `${ MatBook }`
        },
        {
            title: "Your Heart Is The Sea",
            subtitle: "Limited stocks available. Grab it now",
            image: `${ HeartBook }`
        }
    ]
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    carouselItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Carousel
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}

export default HeroCarousel