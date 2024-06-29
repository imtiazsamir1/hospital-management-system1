import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
//import { Children } from "react";
import Home from "../Pages/Home";
import Appointment from "../Pages/Appointment";
import Assistant from "../Pages/Assistant";
import Details from "../Pages/Details";
import Details1 from "../Pages/Details1";
import Details2 from "../Pages/Details2";
import Details3 from "../Pages/Details3";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
children:[{path:'/',element:<Home></Home>,
 
},
{
  path: '/appointment',
    element:<Appointment></Appointment>,
    loader: () =>fetch('http://localhost:5000/users')
},
{
  path: '/detail4',
    element:<Assistant></Assistant>
},
{
  path: '/assistant',
    element:<Details></Details>
},
{
  path: '/detail3',
    element:<Details3></Details3>
},
{
  path: '/detail2',
    element:<Details2></Details2>
},
{
  path: '/detail1',
    element:<Details1></Details1>
},
]     
    },
  ]);