
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, } from 'swiper/modules';
const Swiperslider = () => {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide ><img className='h-[400px]' src="https://i.ibb.co/nwspGDW/electronics-banner-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/KF9nm0S/electronics-banner-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/9yxG1rd/mens-banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/k4NGb54/womens-banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/8B65DNm/home-banner1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/WWV8rJb/home-banner2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/n6k5XRN/time-bg.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/h8t3z0Q/slider-home2-1.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Swiperslider;