import React, { useEffect } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'


import "./Navbar.css"
import {useAuth} from "../../Context/ContextProvider"

function Navbar() {
  let {isLoggedIn,setIsLoggedIn}=useAuth();

  let navigate=useNavigate();

   function getActiveLink({isActive}){
      return{
         textDecoration:isActive?"underline":"none",
         color:isActive?"orange":"white",
      }
   }

   let setLogout=()=>{
      setIsLoggedIn(false);
      navigate("/login");
   }
  return (
    
      <div className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo text-3xl">Shopper</a>
        <ul className="navbar-links ">
         {/* <NavLink to="/" style={getActiveLink}>Home</NavLink> */}
         <NavLink to="/user" style={getActiveLink}>User Details</NavLink>
         <NavLink to="/product" style={getActiveLink}>Product</NavLink>
         <NavLink to="/about" style={getActiveLink}>About</NavLink>
         <NavLink to="/dashboard" style={getActiveLink}>Dashboard</NavLink>
        
        </ul>
        {/* { 
          isLoggedIn?
          <NavLink to="/about" ><button className="login-button" onClick={()=>setLogout()}>Logout</button></NavLink>:
          <NavLink to="/login" ><button className="login-button">Login</button></NavLink>       
        } */}
     
        {
          isLoggedIn?
          <button className="login-button" onClick={()=>setLogout()}>Logout</button>:
          <NavLink to="/login" ><button className="login-button">Login</button></NavLink>      
        }
      </div>
    
    </div>
  )
}

export default Navbar