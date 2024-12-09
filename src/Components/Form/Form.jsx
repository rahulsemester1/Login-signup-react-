import React,{useState,createContext} from 'react'
import { useNavigate } from 'react-router-dom'

import {useAuth} from "../../Context/ContextProvider"


function Form() {
   let [inputVal,setInput]=useState({name:"",email:"",password:"",isLogged:""})
   let navigate=useNavigate();   
   let {isLoggedIn, setIsLoggedIn,userRole, setuserRole}=useAuth();
   

   function navigateButton(value){
      navigate(`/${value}`)
   }

   let handleInputVal=(e)=>{
      setInput({...inputVal,[e.target.name]:e.target.value})    
   }

   let submitVal=(e)=>{
      e.preventDefault();
      let val=JSON.parse(localStorage.getItem(inputVal.password));
      if((val) && (val.password===inputVal.password)){
         let roles=JSON.parse(localStorage.getItem(inputVal.password)).role;            //role purpose
         setuserRole(roles);
         setIsLoggedIn(true);
         if(roles==="admin"){
            navigate(`/dashboard/${val.password}`);
         }else{
            navigate(`/user/${val.password}`);
         }
        
         alert("Successfully Login");
         
        
      }
      else{
         alert("Wrong Credentials, please signup");
      }
      
   }
  return (
   <>
   <div className='min-w-screen h-screen flex justify-center items-center bg-slate-100 '>
   <div className='flex justify-center border rounded-xl bg-white w-[30rem] h-[600px] py-20  '>
     
            <form onSubmit={submitVal} >
            <div>
         <p className='text-slate-400'>Start your journey</p>
        <h1 className='text-4xl font-bold'>Login to Shopper</h1>
        </div>

   <div className='my-5'>       
      < input type="text"
       placeholder="Enter Name" name="name"
       onChange={handleInputVal} 
       className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"
      />     
</div>

<div className='my-5'>
       <input type="email"
       placeholder="Enter Email"
       name="email"
       onChange={handleInputVal}
        className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"
      />
      
</div>

<div className='my-5'>
       <input type="password"
       placeholder="Enter password"
       name="password"
       onChange={handleInputVal}
        className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"
      />
</div>

<div className='my-5'>   
       
       <button className='h-12 w-[350px] bg-blue-600 my-3 rounded text-white' type="submit">Login</button>   
       <p>Don't Have any account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("signup")}>Signup here</span>  </p>
 </div>      
    
     </form>
    </div>
    </div>
   </>
  )
}

export default Form