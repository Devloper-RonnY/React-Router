import React from 'react'
import { Outlet, useParams } from 'react-router'

const UserDetails = () => {
  const userId=useParams();

  return (
    <div>
      <h1>User Details</h1>
      <h2>User Id is : {userId.id}</h2>
      
    </div>
  )
}

export default UserDetails