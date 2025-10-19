import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const Users = () => {
  const url = "https://dummyjson.com/users"
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsersData()
  }, [])

  const getUsersData = async () => {
    let response = await fetch(url)
    response = await response.json()
    setUserData(response.users)
    setLoading(false)
  }

  return (
    <div className='text-center'>
      {loading ? (
        <h2>Loading...</h2>   // 👈 simple loading text
      ) : (
        <>
          <h1 className='font-bold'>Users Page</h1>
          {userData.map((user, id) => (
            <div key={id}>
              <NavLink to={"/users/" + user.id}>{user.firstName}</NavLink>
              <NavLink to={"/users/" + user.id}>{user.lastName}</NavLink>
              <NavLink to={"/users/" + user.id}>{user.age}</NavLink>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Users
