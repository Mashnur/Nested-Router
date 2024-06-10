import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';

import About from './Components/About/About';
import Contact from './Contact/Contact';
import User from './Components/User/User';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
       path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/Users',
        element: <User></User>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
   
)
