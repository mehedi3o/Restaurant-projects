

import SectionTitle from './../../SectionTitle/SectionTitle';

import MenuItem from '../MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const Recipe = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');


    // const [menu, setMenu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // },[])

    return (
        <section className='mb-12 mt-10 text-white'>
    <SectionTitle
    heading=" Our menu"
    subHeading="Popular items"
    
    >

    </SectionTitle>
    <div className='grid md:grid grid-cols-2 gap-5 '>
        {
            popular.map(item =>  <MenuItem
            key={item._id}
            item={item}
            
            >
             
            </MenuItem>)
        }
    </div>
        </section>
    );
};

export default Recipe;
