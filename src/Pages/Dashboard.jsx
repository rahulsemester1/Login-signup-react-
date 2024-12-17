import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Dashboard() {
  const [userDetail, setuserDetail] = useState({password:""});
  const [localStorageInfo, setlocalStorageInfo] = useState([]);
  let [name,setName]=useState("");

   let {dashboardId}=useParams();

   useEffect(()=>{
    const userInfo=[];

   if(dashboardId){
    let val=JSON.parse(localStorage.getItem(dashboardId));
    setuserDetail({password:val.password});
    setName(dashboardId);
    
   }
    for(let i=0;i<localStorage.length;i++){
       const key=localStorage.key(i);
       const value=JSON.parse(localStorage.getItem(key));
       userInfo.push({...value})
    }
    setlocalStorageInfo(userInfo);
   },[])
   console.log(userDetail)

  return (
    <div className='w-[900px] ml-2 '>
    <div >
     <h1 className='absolute left-[180px] top-20  font-semibold '>Welcome:{userDetail.password ? name:"User"}</h1> 
      </div>
 <div>
       
       <table className='absolute left-[240px] top-28 '>
              <tr className='border-[28px]  bg-gradient-to-r from-orange-600 to-orange-300 text-white h-16'>
               <th >Name</th>
               <th >Email</th>
               <th >Role</th>
              </tr><tbody>
        {localStorageInfo.map((user, index) => (
               
              <tr  key={index}>
                <td className='border-[28px] text-lg font-sm text-center' > {(user.name)}</td>
                <td className='border-[28px] text-lg font-sm text-center' > {(user.email)}</td>
                <td className='border-[28px] text-lg font-sm text-center' > {(user.role)}</td>               
              </tr>
                      
        ))}
        </tbody>  
      </table>
      
   </div>
    </div>
  )          
}

export default Dashboard