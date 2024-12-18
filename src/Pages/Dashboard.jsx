import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

// import DeleteIcon from '@mui/icons-material/Delete';

function Dashboard() {
  const [userDetail, setuserDetail] = useState({password:""});
  let [localStorageInfo, setlocalStorageInfo] = useState([]);
  let [name,setName]=useState("");
  const userInfo=[];
   let {dashboardId}=useParams();

   useEffect(()=>{
   if(dashboardId){
    let val=JSON.parse(localStorage.getItem(dashboardId));
    setuserDetail({password:val.password});
    setName(dashboardId);
   }   
},[])

   useEffect(()=>{
    for(let i=0;i<localStorage.length;i++){
      const key=localStorage.key(i);
      const value=JSON.parse(localStorage.getItem(key));
      userInfo.push({...value})
   }
   setlocalStorageInfo(userInfo);
   },[])
   
  //  console.log(userDetail)

   let deleteRecord=(password,phone)=>{
       password?localStorage.removeItem(password): localStorage.removeItem(phone)
       alert("Entry deleted");
   }

  return (
    <div className='w-[900px] ml-2 '>
    <div >
     <h1 className='absolute left-[180px] top-20  font-semibold '>Welcome:{userDetail.password ? name:"User"}</h1> 
      </div>
 <div>
       <button type="button" className='bg-blue-600 hover:border-blue-500 hover:text-black absolute top-20 right-20 border-2 border-black rounded-3xl w-40 h-10 text-white '>Export to Excel</button>
       <table className='absolute left-[190px] top-32 '>
              <tr className=' bg-gradient-to-r from-orange-600 to-orange-300 text-black  h-16 '>
               <th >Name</th>
               <th >Email</th>
               <th >Role</th>
               <th >Age</th>
               <th >State</th>
               <th >city</th>
               <th >Gender</th>
               <th >Phone</th>
               <th >Skills</th>
               <th >Courses</th>
               <th >Actions</th>
              </tr><tbody>
        {localStorageInfo.map((user, index) => (
               
              <tr  key={index}>
                <td className='border-[28px] text-md font-sm text-center' > {(user.name)}</td>
                <td className='border-[28px] text-md font-sm text-center' > {(user.email)}</td>
                <td className='border-[28px] text-md font-sm text-center' > {(user.role)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.age)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.state)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.city)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.gender)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.phone)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.skills)}</td>               
                <td className='border-[28px] text-md font-sm text-center' > {(user.courses)}</td>                            
                <td className='border-[28px] text-md font-sm text-center' > 
                
                         <span className="material-symbols-outlined cursor-pointer mx-1" onClick={()=>deleteRecord(user.password,user.phone)}>delete</span> 
                         <span className="material-symbols-outlined cursor-pointer mx-1">edit</span>  
                         <span className="material-symbols-outlined cursor-pointer mx-1">visibility_off</span>   
                       
                       </td>                            
              </tr>
                      
        ))}
        </tbody>  
      </table>
      
   </div>
    </div>
  )          
}

export default Dashboard