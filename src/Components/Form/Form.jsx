import React,{useState,createContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import {useAuth} from "../../Context/ContextProvider"

// function defaultLoggedIn(){
//    let {inputVal,setInput}=useAuth();
//    let val=localStorage.getItem(inputVal.password).online;
//    return val;
// }


function Form() {
   // let [inputVal,setInput]=useState({name:"",email:"",password:"",isLogged:""})

   let navigate=useNavigate();   
   let {isLoggedIn, setIsLoggedIn,userRole, setuserRole,inputVal,setInput,online,setOnline}=useAuth();
   

   function navigateButton(value){
      navigate(`/${value}`)
   }

   let handleInputVal=(e)=>{
      setInput({...inputVal,[e.target.name]:e.target.value})    
   }

   let submitVal=(e)=>{
      e.preventDefault();
      if(inputVal.name && inputVal.password && inputVal.email ){
       let val=JSON.parse(localStorage.getItem(inputVal.password));
         if((val) && (val.password===inputVal.password)){
            let roles=JSON.parse(localStorage.getItem(inputVal.password)).role;            //role purpose

         // localStorage.setItem('loggedinUserRole',roles);
             setuserRole(roles);
               setIsLoggedIn(true);
               if(roles==="admin"){
                navigate(`/dashboard/${val.password}`,{
                state:{
                  user:val.name,
               }
             });
         }else{
            navigate(`/user/${val.password}`);
         }
        
         alert("Successfully Login");
         
        
      }
      else{
         alert("Wrong Credentials, please signup");
      }

   
   }else{
      alert("enter details");
   }
   }
  return (
   <>
   <div className='min-w-screen h-screen flex justify-center items-center bg-gradient-to-r from-orange-600 to-orange-300 '>
   <div className='flex justify-center border rounded-xl bg-white w-[50rem] h-[550px] py-20 shadow-lg '>
     
            <form onSubmit={submitVal} >
            <div> 
         <p className='text-slate-400'>Start your journey</p>
        <h1 className='text-4xl font-bold'>Login to Shopper</h1>
        </div>

   <div className='my-5'>  
   <span className="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
     person
   </span>     
      < input type="text"
       placeholder="Name" name="name"
       onChange={handleInputVal} 
       className="border border-slate-200 h-[57px]  w-[350px] px-2  bg-slate-200 "
      />     
</div>

<div className='my-5'>
       <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
           mail
       </span>
       <input type="email"
       placeholder=" Email"
       name="email"
       onChange={handleInputVal}
        className="border border-slate-200  w-[350px] px-2 h-[57px]  bg-slate-200 "
      />
      
</div>

<div className='my-5'>
       <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
       lock
       </span>
       <input type="password"
       placeholder="Password"
       name="password"
       onChange={handleInputVal}
        className="border border-slate-200 h-[57px] w-[350px] px-2  bg-slate-200"
      />
</div>
<div>
   <p className='text-center'>Lost Password?<span className='text-blue-700 '>Click here!</span></p>
</div>
<div className='m-6'>   
       
       <button className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer' type="submit" >Login</button>
       <button type="button" className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer' onClick={()=>navigateButton("signup")}>Sign up</button>   
       {/* <p>Don't Have any account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("signup")}>Signup here</span>  </p> */}
 </div>      
    
     </form>
    </div>
    </div>
   </>
  )
}

// function defaultLoggedIn(){
//    let {inputVal,setInput}=useAuth();
   
//    let val=JSON.parse(localStorage.getItem(inputVal.password)).online;
//     return val?val:false;
//     console.log(val);
//  }

export {Form}