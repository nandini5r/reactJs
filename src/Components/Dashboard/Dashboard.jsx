// import Home from '../Home/Home'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
    <Header/>
<Outlet></Outlet>
    
    
    <Footer/>
    </div>
  )
}

export default Dashboard