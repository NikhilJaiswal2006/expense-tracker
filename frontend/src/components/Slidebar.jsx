import React from 'react'
import { Link } from 'react-router-dom'

export default function Slidebar() {
  return (
    <>
    <div className='sidebar'>

    <div className='sidebarcomponent'>

 <div className='appname'>

    <h3>💰 ExpenseTracker</h3>

   </div>


<div className='sidebaritem'>

<ul>
<li><Link to='/dashboard/home'>🏠 Home</Link></li>
<li><Link to='/dashboard/expense'>📊 Expense</Link></li>
<li><Link to='/dashboard/add-expense'>➕ Add Expense</Link></li>
<li><Link to='/dashboard/settings'>⚙️ Settings</Link></li>
<li><Link to='/dashboard/profile'>👤 Profile</Link></li>
</ul>


</div>


    </div>

    </div>
  
    </>
  )
}
