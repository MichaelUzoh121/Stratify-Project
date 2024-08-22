import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer' 
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div className=' flex flex-col w-full '>
      <Header/>
      <Outlet/>
      <Footer/>
       
    </div>
  )
}

export default Layout