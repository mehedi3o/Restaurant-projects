import { Helmet } from 'react-helmet-async';

import MainCover from '../MainCover/MainCover';
import ban6 from '../../assets/Photo/Banner/ban6.jpg'
import sal6 from '../../assets/Photo/Salad/sal6.jpg'
import cover from '../../assets/Photo/Salad/cover.jpg'
import s23 from '../../assets/Photo/Salad/s23.jpg'

import useMenu from '../../hooks/useMenu';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import MenuCategory from '../Menucategory/MenuCategory';


const MainManu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
 
    return (
        <div className='text-white pt-5'>
        <Helmet>
        <title>Restaurant | Menu</title>
        </Helmet>
      
        <MainCover img={ban6} title="Our Menu"></MainCover>
        <SectionTitle subHeading="Don't miss" heading="Today offer"></SectionTitle>
        <MenuCategory  items={offered}></MenuCategory>
      
                 {/* desserts item */}
        <MainCover img={cover } title="Dessert"></MainCover>
        <MenuCategory items={dessert}
         ></MenuCategory>
   
  
     
        {/* salad items */}
        <MainCover img={sal6 } title="Salad"></MainCover>
        <MenuCategory items={salad }
        ></MenuCategory>
        {/* soup items */}
        <MainCover img={s23} title="Soup"></MainCover>
        <MenuCategory items={soup }
        ></MenuCategory>
    
      

        </div>
    );
};

export default MainManu;