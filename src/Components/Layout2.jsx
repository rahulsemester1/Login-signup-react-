import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar/Sidebar"
function Layout() {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout