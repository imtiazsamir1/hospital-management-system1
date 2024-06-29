/* eslint-disable react/jsx-no-undef */

import { Outlet } from "react-router-dom";
import Foter from "../Sheared/Foter";
import Navber from "../Navber/Navber";


const Main = () => {
    return (
        <div>
       <Navber></Navber>
      <Outlet></Outlet>
      
     <Foter></Foter>
        </div>
    );
};

export default Main;