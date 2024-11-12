import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import ban1 from '../../assets/Photo/Banner/ban1.jpg'
import ban2 from '../../assets/Photo/Banner/ban2.jpg'
import ban3 from '../../assets/Photo/Banner/ban3.jpg'
import ban4 from '../../assets/Photo/Banner/ban4.jpg'
import ban5 from '../../assets/Photo/Banner/ban5.jpg'
import ban6 from '../../assets/Photo/Banner/ban6.jpg'

const Menu = () => {
    return (
        <div className='mt-5'>
          <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={ban1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ban2} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ban3} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ban4} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ban5} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ban6} alt="Slide 1" />
      </SwiperSlide>
    
    </Swiper>
        </div>
    );
};

export default Menu;