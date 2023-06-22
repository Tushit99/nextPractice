import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Product from './product/Product'
import Men from './Men/Men' 
import Female from './Female/Female'

const PublicRoute = () => {
  return (
    <div id="page"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/men' element={<Men />} /> 
        <Route path='/female' element={<Female />} />  
      </Routes>
    </div>
  )
}

export default PublicRoute