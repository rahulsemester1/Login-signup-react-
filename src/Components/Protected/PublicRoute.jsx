import React,{useEffect} from 'react'

import { BrowserRouter as Router,RouterProvider,createRoutesFromElements,Routes,Route,Navigate,useNavigate, Outlet, useLocation } from 'react-router-dom'
import {useAuth} from "../../Context/ContextProvider"
import Dashboard from '../../Pages/Dashboard';
import User from '../../Pages/User';
import About from '../../Pages/About';



function PublicRoute({children}) {
   let location=useLocation();
   let {isLoggedIn,setIsLoggedIn}=useAuth();
   let navigate=useNavigate();

  return !isLoggedIn?<Outlet/>:navigate("/user");
    // return isLoggedIn?{children}:navigate("/login")     
   
   }

   export default PublicRoute 


// function PublicRoute({children}){
//    let {isLoggedIn,setIsLoggedIn}=useAuth();
//    let navigate=useNavigate();

//    useEffect(()=>{
//       if(isLoggedIn){
//          navigate("/about")
//          alert("'Login' first to access Dashboard page")
//       }
//       else{
//           {children};
//       }
//    },[])
// }



