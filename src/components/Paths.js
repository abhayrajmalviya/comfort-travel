import React from 'react'
import Home from '../Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
const Paths = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route  path="/home" exact element={<Home/>} />
      <Route  path="/signup" exact element={<Signup/>} />
      <Route  path="/login" exact element={<Login/>} />
    </Routes>
  )
}

export default Paths
