import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="pb-16" >
           <div className="navbar fixed z-10 bg-opacity-30  bg-sky-950 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/appointment'>Appointment</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link to='/assistant'>Assistant</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Link to='/'>ZaneAlom Hospital</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/appointment'>Appointment</Link></li>
     
      
      <li><Link to='/assistant'>Assistant</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
    <a className="btn">Button</a>
  </div>
</div> 
        </div>
    );
};

export default Navber;