import { Helmet } from "react-helmet-async";
import Banner from "../../Pages/Banner/Banner";
import Category from "../../Pages/Category/Category";
import Cover from "../../Pages/Cover/Cover";
import Item from "../../Pages/Item/Item";
import Menu from "../../Pages/Menu/Menu";
import SidePage from "../../Pages/Sidepage/Sidepage";
import Special from "../../Pages/Special/Special";
import OurMenu from "../../Pages/our menu/OurMenu";
import Recipe from "../Shared/Recipe/Recipe";


const Home = () => {
    return (
        <div>
         <Helmet>
        <title>Restaurant | Home</title>
      
      </Helmet>
          <Banner></Banner>
          <Category></Category>
          <Recipe></Recipe>
          <SidePage></SidePage>
          <Special></Special>

          <Menu></Menu>
          <OurMenu></OurMenu>
          <Cover></Cover>
          <Item></Item>
         
        </div>
    );
};

export default Home;