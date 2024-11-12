import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import MainManu from "../Pages/MainMenu/MainManu";
import Reservation from "../Pages/Reservation/Reservation";
import Login from "../components/Shared/Login/login";
import OurMenu from "../Pages/our menu/OurMenu";



  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'main-menu',
          element: <MainManu></MainManu>
        },
        {
          path:'reservation',
          element: <Reservation></Reservation>
        },
        {
          path:'ourmenu',
          element: <OurMenu></OurMenu>
        },




        {
          path:'login',
          element: <Login></Login>
        }






      ]
    },
  ]);