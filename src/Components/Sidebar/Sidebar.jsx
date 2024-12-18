import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


import Dashboard from '../../Pages/Dashboard'
import UserDetail from '../../Pages/UserDetail'


function Sidebar(val) {
   let [colorText,setColor]=useState(false)
   let navigate=useNavigate();

   let navigateUser=(val)=>{
      navigate(`/${val}`)
      setColor(val);
   }
   
  return (
   <div className='inline-block bg-black h-[1000px] relative w-36 '>
      <div >
         {/* <span className="material-symbols-outlined bg-white">
            density_medium
         </span> */}
      </div>
      
      <div className=' text-white p-3'>
         <ul className='space-y-4 space-x-1 text-lg'>
            <li className={`cursor-pointer hover:text-orange-400 ${colorText==="dashboard"?"text-orange-400":"text-white"}`} onClick={()=>navigateUser("dashboard")}>Dashboard</li>
            <li className={`cursor-pointer hover:text-orange-400 ${colorText==="userdetail"?"text-orange-400":"text-white"}`} onClick={()=>navigateUser("userdetail")}>Add User</li>
            <li className="cursor-pointer  hover:text-orange-400">Profile</li>
            <li className="cursor-pointer  hover:text-orange-400">Blogs</li>
            <li className="cursor-pointer  hover:text-orange-400">Settings</li>
         </ul>
      </div>
   </div>
    
  )
}

export default Sidebar