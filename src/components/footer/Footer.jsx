import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub, FaKaggle, FaTwitter } from "react-icons/fa";



const Footer = () => {

    return (
        <footer>
            <hr className='separator' />
            <div className='footer'>
                <div className='social'>
                    <FaInstagram className='socialIcon' />
                    <FaLinkedin className='socialIcon' />
                    <FaGithub className='socialIcon' />
                    <FaKaggle className='socialIcon' />
                    <FaTwitter className='socialIcon' />
                </div>
                <div>
                    <ul className='options'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li >
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li >
                            <NavLink to='/works'>Works</NavLink>
                        </li>
                        <li >
                            <NavLink to='/services'>Services</NavLink>
                        </li>
                        <li >
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer