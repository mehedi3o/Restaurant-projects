
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css' 

import ban7 from '../../assets/Photo/Banner/ban7.jpg'
import ban2 from '../../assets/Photo/Banner/ban2.jpg'
import ban3 from '../../assets/Photo/Banner/ban3.jpg'
import ban4 from '../../assets/Photo/Banner/ban4.jpg'


const Banner = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <Carousel 
          spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        <div className='-mt-36 opacity-80'>
            <img src={ban7} />
            <p className='text-white uppercase -mt-96'>More flavor for less</p>
         
         <h2 className='text-6xl text-white	 uppercase mt-15 font-bold'>Taste The </h2>

         <h1 className='text-7xl  text-white	 uppercase mt-15 font-bold	 py-2'>Difference</h1>

         <p className='text-white	'>When the going gets tough, the tough get grilling. <br />  Bringing heat to your meat. No one can compete with our meat</p>
         <div className='py-2 mt-2'>
         <button className="btn btn-outline btn-warning">Our Menus</button>
         </div>
       
         
         
        </div>
        <div className='-mt-24'>
            <img src={ban2} />
           
         
       
        </div>
        <div className='-mt-28'>
            <img src={ban3} />
    
         
       
        </div>
        <div className='-mt-32'>
            <img src={ban4} />
         
         
         
        </div>
       
    </Carousel>
        </div>
    );
};

export default Banner;