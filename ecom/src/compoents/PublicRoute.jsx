import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Product from './product/Product'
import Men from './Men/Men'

const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/product" element={<Product />} /> 
        <Route path='/men' element={<Men />} />  
    </Routes> 
  )
}

export default PublicRoute