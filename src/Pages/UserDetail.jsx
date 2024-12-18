import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function UserDetail() {
 let navigate=useNavigate();
 let [user,setUser]=useState({name:"",email:"",age:null,courses:"",gender:"",city:"",state:"",skills:[],address:"",phone:null,role:""})

 let handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})  
 }

 let handleArray=(e)=>{
   user.skills.push(e.target.value);
 }

 let submitVal=(e)=>{
  e.preventDefault();
  alert("value added")
  console.log(user);
  localStorage.setItem(user.phone,JSON.stringify(user))
  navigate("/dashboard")
    
 }

  return (
    <div >
    <div className='absolute top-24 left-[475px] bg-slate-100 shadow-orange-800 w-[580px] h-[950px] border rounded-3xl '>
    <h1 className='text-center font-semibold mb-6 text-lg border-b-2 border-slate-200 border rounded-t-3xl h-20 bg-gradient-to-r from-orange-600 to-orange-300 text-white flex items-center justify-center'>Add User</h1>
      <form onSubmit={submitVal} className='px-4'>
      <div className='p-2 m-2'>
      
         <label for="name" className="font-medium ml-2">User Name</label>
         <input type="text" 
           id="name" 
           name="name"
           onChange={handleChange}  
           required 
           className='border-2 h-10 w-[400px] rounded-md block px-2 hover:border-blue-400' 
           placeholder='Enter Name'/>
      </div>


      <div className='p-2 m-2 relative'>
      <label for="email" className="font-medium ml-2">E-mail</label>
      <input type="email" 
      id="email"  
      name="email"
      onChange={handleChange} 
      className='border-2 h-10 rounded-md block w-[300px] px-2 hover:border-blue-400' 
      placeholder='ex:myname@example.com' 
      required />
      </div>

      <div className='absolute top-[200px] left-[360px] '>
      <label for="age" className="font-medium ml-1">Age</label>
      <input type="number" 
      id="age" 
      name="age"
      onChange={handleChange} 
      className='border-2 h-10 rounded-md block w-[70px] hover:border-blue-400' 
      required />
      </div>

      <div className='p-2 m-2'>
      <label for="courses" className="font-medium">Courses</label>
     <select id="courses"
          name="courses"
          onChange={handleChange}  
          className='border-2 h-10 w-[260px] rounded-md block px-2 hover:border-blue-400'>
          <option value="DBMS"></option>
          <option value="DBMS">DBMS</option>
          <option value="C">C</option>
          <option value="DSA">DSA</option>
          <option value="Java">Java</option>
          <option value="Python">DBMS</option>
      </select>
      </div>

      <div className="font-medium p-2 m-2">
        Gender
      <label for="male" className='mx-2 text-md font-normal'>
        Male<input type="radio" 
        id="male" 
        name="gender" 
        value="male"
        onChange={handleChange} 
        className='mx-2' 
        required />
      </label>

      <label for="female" className='mx-2 text-sm font-normal'> 
        Female<input type="radio" 
        id="female" 
        name="gender" 
        value="female" 
        onChange={handleChange} 
        className='mx-2'  
        required />
      </label>
      </div>


     <div className='flex'>
      <div className="font-medium ml-2">
      <label for="city" className='ml-2'>City</label>
      <input type="text" 
      id="city"  
      name="city" 
      onChange={handleChange} 
      className='border-2 h-10 w-[200px] rounded-md block px-3 hover:border-blue-400' 
      required 
      placeholder="Select City" />
      </div>

      <div>
      <label for="state" className="font-medium ml-3">State</label>
      <input type="text"
       id="state" 
       name="state"
       placeholder="Select State" 
       className='border-2 h-10 w-[200px] rounded-md block px-2 mx-3 hover:border-blue-400' 
       onChange={handleChange} 
       required />
      </div>
     </div> 

      <div className=" my-6 ml-2">
      <label for="skills" className="m-2 font-medium">Skills</label>
        JavaScript<input type="checkbox" id="skills"  onChange={handleArray}   name="skills" className="m-3 font-normal" value="JavaScript"  />
        React<input type="checkbox" name="skills"  onChange={handleArray}   value="React"  className="m-3 font-normal"  />
        Node.js<input type="checkbox" name="skills"  onChange={handleArray}   value="Node.js" className="m-3 font-normal"  />
        TypeScript<input type="checkbox" name="skills"  onChange={handleArray}   value="TypeScript" className="m-3 font-normal"  />
      </div>

      <div className="font-medium my-2">
      <label for="address" className='ml-2'>Address</label>
      <input type="textarea" 
      rows="2" cols="50" 
      id="address" 
      name="address" 
      onChange={handleChange}  
      className='border-2 h-10 w-[400px] rounded-md block px-2 hover:border-blue-400'  />
      </div>

      <div className="font-medium">
      <label for="phone" className='ml-2'>Phone</label>
      <input type="number"
       id="phone" 
       
       name="phone"
        className='border-2 h-10 w-[400px] rounded-md block px-2 hover:border-blue-400' 
        placeholder='+91-9XXXX-XXXXX' 
        onChange={handleChange}  />
      </div>

      <div className="font-medium my-6 ml-2 ">
        Role
      <label for="admin" className='mx-2 text-md font-normal'>
        Admin<input type="radio" 
        id="admin"
         name="role" 
         value="admin" 
         onChange={handleChange}   />
      </label>
      <label for="user" className='mx-2 text-md font-normal'> 
        User<input type="radio" 
        id="user" 
        name="role" 
        value="user" 
        onChange={handleChange}   />
      </label>
      </div>

      <div>
        <input type="image" src="src/assets/user.avif" alt="image preview" className='w-10'/>
      </div>

      <div>
       Upload Image<input type="file" id="image" accept="image"/>
      </div>

      <div className='flex justify-center mt-3'>
     <button type='submit'  className='h-10 rounded-3xl w-[350px] bg-orange-600 my-3 text-white '>Submit</button>
      </div> 

      

      </form>
      </div>
      </div>
  )
}

export default UserDetail