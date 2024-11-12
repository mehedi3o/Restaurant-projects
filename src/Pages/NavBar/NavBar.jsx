import { Link } from "react-router-dom";



const NavBar = () => {
const navOption = <>
    <div className="flex font-bold">
    <li> <Link to="/">Home</Link> </li>
    <li><Link to="/main-menu" >Our menu</Link></li>
   <li>
   <Link  to="/login" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >About</Link></li>
   <li><Link to="/ourmenu" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>Reservation</Link></li>
  
    </div>
  
   
</>

const navSide = <>
 <li><Link to="/login">Login</Link></li>

</>


    return (
        <div>
    <div className="navbar fixed z-10 bg-opacity-5 bg-gray-900	 text-white">
  <div className="navbar-start">
   
   <h1 className="text-5xl font-bold">M</h1>
   <h6 className="text-base	font-bold mt-3">ehedi
   <span>
   <p className="font-semibold text-sm">RESTAURANT</p>
   </span>
   </h6>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lime-400">
    {navOption}
    </ul>
  </div>
  <div className="navbar-end">
  {/* work to do */}
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {navSide}
    
       </ul>
    </div>

  </div>
</div>
        </div>
    );
};

export default NavBar;