import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const College = () => {
  // using navigation button and navlink
  // const navigate = useNavigate();

  // const goHome=()=>{
  //   navigate('/')
  // }

  return (
    <div className='text-center'>
        <h1>College Details</h1>

        <NavLink className='font-semibold' to='/'>Go to Home</NavLink>
        {/* <button onClick={goHome}>Go to Home</button> */}

        <div className='py-3 space-x-6'>
            <NavLink to=''>Students</NavLink>
            <NavLink to='department'>Departments</NavLink>
            <NavLink to='detail'>Details</NavLink>
            <Outlet />
        </div>
    </div>
  )
}

export default College