import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Dashboard() {
  const [userDetail, setuserDetail] = useState({password:""});
  const [localStorageInfo, setlocalStorageInfo] = useState([]);

   let {dashboardId}=useParams();

   useEffect(()=>{
    const userInfo=[];

    if(dashboardId){
    let val=JSON.parse(localStorage.getItem(dashboardId));
    setuserDetail({password:val.password});
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
    <div>
      
     <h1 className='font-semibold'>Welcome:{userDetail.password ? userDetail.password:""}</h1> 
      
     <ul>
        {localStorageInfo.map((user, index) => (
          <li key={index}>
            {JSON.stringify(user)}
          </li>
        ))}
      </ul>
    </div>
  )          
}

export default Dashboard