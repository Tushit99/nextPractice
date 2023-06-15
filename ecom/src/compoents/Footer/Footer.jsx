import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import {FaFacebookF} from "react-icons/fa"; 

const Footer = () => {
    return ( 
        <div>  
            <div>
                <div>
                    <h5>Help</h5>
                    <p>Customer Service</p>
                    <p>Track Order</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h5>Quick Links</h5>
                    <p>Size Charts</p>
                    <p>Offers & Promotions</p>
                    <p>My Favorites</p>
                </div>
                <div>
                    <h5>About J.Crew</h5>
                    <p>Our Story</p>
                    <p>Careers</p>
                    <p>Social Responsibility</p>
                    <p>Investor Relations</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h5>Like Being First?</h5>
                    <p>Get can't-miss style news, before everybody else. </p>
                </div>
            </div>
            <div>
                <h3><BsInstagram /></h3>
                {/* <h3> <FaFacebookF /> </h3> */}
            </div>
        </div>
    )
}

export default Footer
