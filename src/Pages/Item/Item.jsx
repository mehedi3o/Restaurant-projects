

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import ban1 from '../../assets/Photo/Banner/ban1.jpg'
import ban2 from '../../assets/Photo/Banner/ban2.jpg'
import ban3 from '../../assets/Photo/Banner/ban3.jpg'
import ban4 from '../../assets/Photo/Banner/ban4.jpg'
import ban5 from '../../assets/Photo/Banner/ban5.jpg'
import ban6 from '../../assets/Photo/Banner/ban6.jpg'


const Item = () => {
    return (
        <div className="text-white text-center mt-10">
            <p className="uppercase">fellow along</p>
          <h1 className="uppercase text-3xl font-bold py-2 px-3">---@Mehedi---</h1>
         {/* new text add now.... */}
          <div className='mt-5'>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ban1} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={ban2} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={ban3} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={ban4} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={ban5} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={ban6} />
          </SwiperSlide>
       
      </Swiper>
          </div>

        </div>
    );
};

export default Item;