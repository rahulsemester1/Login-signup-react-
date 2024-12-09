import React from 'react'
import { useAuth } from '../../Context/ContextProvider';
import { Outlet } from 'react-router-dom';


function Admin({children}) {
  let {isLoggedIn,setIsLoggedIn,userRole, setuserRole}=useAuth();
  return (userRole=="admin"?<Outlet/>:alert("You dont have  accessed to this page"));
  
}

export default Admin