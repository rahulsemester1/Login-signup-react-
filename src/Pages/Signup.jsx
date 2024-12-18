import React, { useState } from 'react'
import {useReducer} from "react";
import { useNavigate } from 'react-router-dom'


function Signup() {
let [input,setInput]=useState({name:"",email:"",password:"",role:"user",online:false})
let navigate=useNavigate();   

function navigateButton(value){
   navigate(`/${value}`)
}

   const handleChange=(e)=>{
      setInput({...input, [e.target.name]: e.target.value})  
   }

   function preventSubmit(e){
      e.preventDefault();
      if(input.name && input.email && input.password){
      localStorage.setItem(input.password,JSON.stringify(input));
      alert("User Registered Successfully");
      setInput({name:"",email:"",password:"",role:"user"})
      }
      else{
         alert("User Not Registered ");
      }
   }
  return (
   <>
   <div className='min-w-screen h-screen flex justify-center items-center bg-gradient-to-r from-orange-600 to-orange-300  '>
   <div className='flex justify-center border rounded-xl bg-white w-[50rem] h-[550px] py-20 shadow-lg mt-4'>
     
      <form onSubmit={preventSubmit}>

<div>
      <h2 className='text-4xl font-bold'>Sign-Up here</h2>
</div>

<div className='my-5'> 
       <span className="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
         person
       </span>  
       <input type="text"
       placeholder="Enter Name" name="name"
       onChange={handleChange} value={input.name}
       className="border border-slate-200  h-[57px]  w-[350px] px-2  bg-slate-200"       
      />
</div>

 <div className='my-5'>   
       <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
         mail
       </span>
       <input type="email"
       placeholder="Enter Email" name="email"
       onChange={handleChange} value={input.email}
       className="border border-slate-200 h-[57px]  w-[350px] px-2  bg-slate-200"
      />
</div>

<div className='my-5'>
      <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
       lock
       </span>
       <input type="password" name="password"
       placeholder="Enter password" value={input.password}
       onChange={handleChange}
       className="border border-slate-200 h-[57px]  w-[350px] px-2  bg-slate-200"
      />
</div>

<div className='m-6'>     
       <button type="button" className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer' onClick={()=>navigateButton("login")}  >Login</button>
       <button className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer'>Sign up</button>   
       {/* <p>Don't Have any account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("signup")}>Signup here</span>  </p> */}
 </div>

<div className='my-5'>       
     {/* <button className='h-12 w-[350px] bg-orange-600 my-3 rounded text-white' type="submit">Sign up</button> */}
     {/* <p>Already have an account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("login")}>Login here</span>  </p> */}
 </div>    
    
     </form >
    </div>
    </div>
    </>
  )
}

export default Signup