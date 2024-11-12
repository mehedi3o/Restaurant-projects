import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import men1 from '../../assets/Photo/menu/men1.jpg'
import men2 from '../../assets/Photo/menu/men2.jpg'
import men3 from '../../assets/Photo/menu/men3.jpg'
import men4 from '../../assets/Photo/menu/men4.jpg'
import men5 from '../../assets/Photo/menu/men5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
       <section>
       <SectionTitle 
       heading={"View Menus"}
       subHeading={"Love it"}
       >

       </SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={men1} alt="" />
        <h3 className='text-2xl text-center text-white uppercase -mt-10'>Vegetables</h3>
       
        </SwiperSlide>
        <SwiperSlide>
        <img src={men2} alt="" />
        <h3 className='text-2xl text-center text-white uppercase -mt-10'>Soup</h3>

        </SwiperSlide>
        <SwiperSlide>
        <img src={men3} alt="" />
        <h3 className='text-2xl text-center text-white uppercase -mt-10'>Rice</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={men4} alt="" />
        <h3 className='text-2xl text-center text-white uppercase -mt-10'>Fish</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={men5} alt="" />
        <h3 className='text-2xl text-center text-white uppercase -mt-10'>Desserts</h3>
        </SwiperSlide>
      
      </Swiper>
       </section>
    );
};

export default Category;