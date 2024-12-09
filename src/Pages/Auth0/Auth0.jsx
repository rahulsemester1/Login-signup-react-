import React from 'react';
import './Auth0.css'; 
// import { useAuth0 } from "@auth0/auth0-react";


const Auth0 = () => {
  //  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
   
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Shopper</a>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="login-button">Login</button>
        {/* {isAuthenticated && (<div className='user-name'>Welcome:{user.name.split("1")[0]}</div>)}
        { isAuthenticated ? 
        <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> 
         : 
         <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>} */}

      </div>
    </nav>
  );
};

export default Auth0;
