import React from 'react'
import style from "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav> 
            <div id={style.box1}></div>
            <div id={style.box2}>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
            </div>
        </nav>
    ) 
}  

export default Navbar 
