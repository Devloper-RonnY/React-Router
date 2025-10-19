import React from 'react'
import { Link, Outlet, useParams } from 'react-router'

const UserDetails = () => {
  const {id}=useParams();

  return (
    <div className='text-center'>
      <h1>User Details</h1>
      <h2>User Id is : {id}</h2>
      <h3><Link to='/users'>Go Back</Link></h3>
      
    </div>
  )
}

export default UserDetails