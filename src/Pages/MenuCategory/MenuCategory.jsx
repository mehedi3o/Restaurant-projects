import MenuItem from "../../components/Shared/MenuItem/MenuItem";
import MainCover from "../MainCover/MainCover";



const MenuCategory = ({items, title, img}) => {
    return (
        <div className='text-white pt-8'>
       { title && <MainCover img={img} title={title}></MainCover>}

<div className='grid md:grid grid-cols-2 gap-10 mt-16 '>
        {
            items.map(item =>  <MenuItem
            key={item._id}
            item={item}
            
            >
             
            </MenuItem>)
        }
    </div>
        </div>
    );
};

export default MenuCategory;