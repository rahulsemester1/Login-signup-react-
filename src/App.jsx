import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth0 from './Pages/Auth0/Auth0'
import {Form} from './Components/Form/Form.jsx'
import { BrowserRouter as Router,RouterProvider,createRoutesFromElements,Routes,Route,Navigate } from 'react-router-dom'
import Product from './Pages/Product'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import UserDetail from './Pages/UserDetail.jsx'
import User from './Pages/User'
import Layout from './Components/Layout'
import ProtectedRoutes from './Components/Protected/ProtectedRoutes.jsx'
import { useAuth } from './Context/ContextProvider.jsx'
import Admin from './Components/Protected/Admin.jsx'
import PublicRoute from './Components/Protected/PublicRoute.jsx'
import UserRole from './Components/Protected/UserRole.jsx'
import Layout2 from "./Components/Layout2.jsx"


function App() {
  let {isLoggedIn,setIsLoggedIn,userRole, setuserRole}=useAuth();


return (
      <>
  <Router>
    <Routes>

   <Route path="" element={<Layout/>}>
      <Route path="/" element={<Home/>}/> 
      <Route path="about" element={<About/>}/>
      
      {/* <Route  element={<PublicRoute/>}>  */}
      <Route path="login" element={<Login/>}/> 
      <Route path="signup" element={<Signup/>}/> 
            {/* </Route> */}
    
    {/* Protected Routes */}
      <Route  element={<ProtectedRoutes/>}> 
      <Route  element={<Admin/>}>  {/* Admin */}
        
      
      <Route  element={<Layout2/>}> 
        <Route path="dashboard" element={<Dashboard/>}/> 
        <Route path="dashboard/:dashboardId" element={<Dashboard/>}/> 
        <Route path="userdetail" element={<UserDetail/>}/> 
      </Route>  
     
      </Route>

      <Route  element={<UserRole />}>  {/* User */}
      <Route path="product" element={<Product/>}/>
      <Route path="user" element={<User/>}/> 
      <Route path="user/:userId" element={<User/>}/>
    </Route>
      </Route>
    
         
    </Route>    
  </Routes>
</Router>
  </>
 )
}
export default App

  {/* </>
          } */}

          {/* <Route path="login" element={<Login/>}/> 
          <Route path="signup" element={<Signup/>}/> */}
               {/* {
                  isLoggedIn && <>
                  <Route path="login" element={<Navigate to="/"/>}/> 
                  <Route path="signup" element={<Navigate to="/"/>}/> 
                  <Route path="/" element={<User/>}/> 
                  </>
                }  */}
                {/* {
                  isLoggedIn && <>
                  <Route path="login" element={<Navigate to="/"/>}/> 
                  <Route path="signup" element={<Navigate to="/"/>}/> 
                  <Route path="/" element={<User/>}/> 
                  </>
                } */}
{/* 
  const router=createBrowserRouter([
    {


      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/product',
          element:<Product/>
        },
        {
          path:'/user',
          element:<User/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        { 
          path:'/signup',
          element:<Signup/>
        },
        { 
          // path:'/dashboard',                       // Protected Routes                                      
          element:(
          <ProtectedRoutes>
            <Dashboard/>
          </ProtectedRoutes>
            )
        },
        { 
          path:'/dashboard/:dashboardId',
          element:<Dashboard/>
        },
      ]
    }
  ]) */}

  
//      <RouterProvider router={router}/>
//     </>
//   )
// } 


