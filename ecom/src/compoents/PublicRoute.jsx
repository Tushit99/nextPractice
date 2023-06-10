import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Product from './product/Product'

const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/product" element={<Product />} />
    </Routes> 
  )
}

export default PublicRoute