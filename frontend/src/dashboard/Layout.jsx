import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slidebar from '../components/Slidebar';


 function Layout() {
  return (
    <>
  <div className='dashboard'>
<Slidebar></Slidebar>

<div className='main'>

<Navbar></Navbar>
<Outlet/>

</div>


  </div>
    
    
    </>

  )
}

export default Layout;
