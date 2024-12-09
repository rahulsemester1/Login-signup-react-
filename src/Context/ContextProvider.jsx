import React,{useContext,createContext,useState} from 'react'

const AuthContext=createContext();

 function ContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userRole, setuserRole] = useState("user");
  return (
    <>
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userRole, setuserRole}}>
       {children}
    </AuthContext.Provider>
    </>
  )
}

const useAuth=()=> useContext(AuthContext);

export {ContextProvider,useAuth}