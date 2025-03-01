import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../components/About'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'


function Routing() {
  return (
    <Routes>
        <Route to='/' element={<Home/>}/>
        <Route to='/about' element={<About/>}/>
        <Route to='/login' element={<Login/>}/>
        <Route to='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routing