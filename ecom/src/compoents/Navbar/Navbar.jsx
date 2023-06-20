import React from 'react';
import style from "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <nav>
            <div id={style.box1}>
                <img src={logo} alt="logo" className={style.company_logo} />
            </div>
            <div id={style.box2}>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/men"> Men </Link>
            </div>
        </nav>
    )
}

export default Navbar 
