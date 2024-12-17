import React,{useEffect} from 'react'
import { useNavigate,Outlet,Navigate } from 'react-router-dom';
import {useAuth} from "../../Context/ContextProvider"


function ProtectedRoutes() {
   let {isLoggedIn,setIsLoggedIn}=useAuth();   
   let navigate=useNavigate();
// debugger
// console.log(isLoggedIn)
// console.log(localStorage.getItem('loggedinUserRole'));
   return isLoggedIn?<Outlet/>:<Navigate to="/login"/>

   // useEffect(()=>{
   //    if(!isLoggedIn){
   //       navigate("/login")
   //       alert("'Login' first to access Dashboard page")
   //    }
   //    else{
   //       <Outlet/>
         
   //    }
   // },[])
 
}

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

export default ProtectedRoutes