import React from 'react'
import ReactDOM from 'react-dom/client'
import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'
      import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
<HelmetProvider>
<div className='max-w-screen-xl mx-auto bg-black text-white'>
 <RouterProvider router={router} />
 </div>
</HelmetProvider>
  </React.StrictMode>
)
