import React from 'react'
import { NavLink, Outlet } from 'react-router'


const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-gray-200 px-3 py-5'>
        <div>
            <h1 className='font-semibold text-2xl'>Logo</h1>
        </div>

        <div className='flex space-x-6 font-semibold text-2xl'>
           <NavLink className={({isActive})=>(isActive ? "text-yellow-400 font-bold underline" : "text-black")} to='/'>Home</NavLink>
           <NavLink className={({isActive})=>(isActive ? "text-yellow-400 font-bold underline" : "text-black")}  to='/login'>Login</NavLink>
           <NavLink className={({isActive})=>(isActive ? "text-yellow-400 font-bold underline" : "text-black")}  to='/about'>About</NavLink>
           <NavLink className={({isActive})=>(isActive ? "text-yellow-400 font-bold underline" : "text-black")}  to='/college'>College</NavLink>
           <NavLink className={({isActive})=>(isActive ? "text-yellow-400 font-bold underline" : "text-black")}  to='/Users'>Users</NavLink>
        </div>
      </div>
     <Outlet />
    </>
  )
}

export default Navbar