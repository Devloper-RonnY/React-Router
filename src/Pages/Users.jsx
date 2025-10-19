import React from 'react'
import { NavLink } from 'react-router'

const Users = () => {
    const userData=[
        {id:1, name:"Roshan"},
        {id:2, name:"Bhavesh"},
        {id:3, name:"Atharv"},
        {id:4, name:"Sujal"},
        {id:5, name:"Shreyas"},
    ]
  return (
    <div className='text-center'>
        <h1 className='font-bold'>Users Page</h1>
        {
            userData.map((user,id)=>(
                <div key={id}>
                    <NavLink to={"/users/"+user.name}>{user.name}</NavLink>
                </div>
            ))
        }
    </div>
  )
}

export default Users