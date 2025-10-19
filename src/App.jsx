import React from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'
// import PageNotFound from './Pages/PageNotFound'
import College from './Pages/College'
import Students from './Pages/Students'
import Department from './Pages/Department'
import Details from './Pages/Details'
import Users from './Pages/Users'
import UserDetails from './Pages/UserDetails'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/*  index routing */}
      <Routes>
        <Route element={<Navbar /> }> // navbar only reflect those who pass in the element
        <Route path='/' element={<Home/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />
        </Route>
          

        //  nested Routes
        <Route path='/college' element={<College/>}>
        <Route index element={<Students />} /> //default opening route
        <Route path='department' element={<Department />} />
        <Route path='detail' element={<Details />} />
        </Route>

        {/* <Route path='/*' element={<PageNotFound />}/> */}  404 page
        <Route path='/*' element={<Navigate to="/login" />}/>  // re-redirect      
      </Routes>
      
    </>
  )
}

export default App