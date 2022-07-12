import React from 'react'
import { Outlet } from 'react-router-dom'
import './main-layout.scss'
import SideBar from '../components/SideBar/SideBar'
import NavBar from '../components/NavBar/NavBar'

const MainLayout = () => {
  return (
    <>
        <SideBar />
        <div className='main'>
            <div className="main__content">
                <NavBar />
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default MainLayout