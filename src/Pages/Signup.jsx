import React, { useState } from 'react'
import {useReducer} from "react";
import { useNavigate } from 'react-router-dom'


function Signup() {
// let[newState,dispatch]=useReducer(reducer,initialVal);
let [input,setInput]=useState({name:"",email:"",password:""})
let navigate=useNavigate();   

function navigateButton(value){
   navigate(`/${value}`)
}

   const handleChange=(e)=>{
      setInput({...input, [e.target.name]: e.target.value})  
   }

   function preventSubmit(e){
      e.preventDefault();
      localStorage.setItem(input.password,JSON.stringify(input));
      alert("User Registered Successfully");
      setInput({name:"",email:"",password:""})
   }
  return (
   <>
   <div className='min-w-screen h-screen flex justify-center items-center bg-slate-100 '>
   <div className='flex justify-center border rounded-xl bg-white w-[30rem] h-[600px] py-20  '>
     
      <form onSubmit={preventSubmit}>

<div>
      <h2 className='text-4xl font-bold'>Sign-Up here</h2>
</div>

<div className='my-5'>
       <input type="text"
       placeholder="Enter Name" name="name"
       onChange={handleChange} value={input.name}
       className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"       
      />
</div>

 <div className='my-5'>  
       <input type="email"
       placeholder="Enter Email" name="email"
       onChange={handleChange} value={input.email}
       className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"
      />
</div>

<div className='my-5'>
       <input type="password" name="password"
       placeholder="Enter password" value={input.password}
       onChange={handleChange}
       className="border border-slate-200 h-12 rounded-xl w-[350px] px-2"
      />
</div>

<div className='my-5'>       
     <button className='h-12 w-[350px] bg-blue-600 my-3 rounded text-white' type="submit">Sign up</button>
     <p>Already have an account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("login")}>Login here</span>  </p>
 </div>    
    
     </form >
    </div>
    </div>
    </>
  )
}

export default Signup