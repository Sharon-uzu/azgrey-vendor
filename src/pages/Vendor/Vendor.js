import React from 'react'
import Sidebar from '../../Components/SideBar'
import { Outlet } from 'react-router'
import {MainHeaderBar} from "../../Components/HeaderBar"
import MenuItem from "../../Components/MenuItem"
const Vendor = () => {

  
  return (
    <>
      <Sidebar pageNum={2} display="hidden"
      menuItem={MenuItem}>
        <MainHeaderBar btnText="Create"/>
        <Outlet/>
      </Sidebar>
    </>
  )
}

export default Vendor