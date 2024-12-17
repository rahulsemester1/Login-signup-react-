import React,{useContext,createContext,useState} from 'react'

// import { defaultLoggedIn } from '../Components/Form/Form';


const AuthContext=createContext();

// function defaultLoggedIn(){
//   let val=localStorage.getItem(inputVal.password).online;
//   debugger
//   console.log(val);
// }

 function ContextProvider({children}) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userRole, setuserRole] = useState("user");
 
  let [inputVal,setInput]=useState({name:"",email:"",password:"",isLogged:"",online:false})
  return (
    <>
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userRole, setuserRole,inputVal,setInput}}>
       {children}
    </AuthContext.Provider>
    </>
  )
}

const useAuth=()=> useContext(AuthContext);

export {ContextProvider,useAuth}