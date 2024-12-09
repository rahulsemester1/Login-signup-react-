import React from 'react'
import { useAuth } from '../../Context/ContextProvider';
import { Outlet, useLocation,useNavigate } from 'react-router-dom';


function UserRole({children}) {
  let {isLoggedIn,setIsLoggedIn,userRole, setuserRole}=useAuth();
   return userRole=="user"?<Outlet/>:alert("You dont have  accessed to this page");
}

export default UserRole