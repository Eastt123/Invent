import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import magnifier from "../../assets/magnifier.svg"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='navbar'>
            <div className="navbar-links">
                <div className="navbar__links-logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="navbar__links-container">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#blog">blog</a></li>
                        <li><a href="#contact">contact</a></li>
                        <li><img src={magnifier} alt="search" /></li>
                    </ul>
                    
                </div>

                <div onClick={()=>{setOpen(!open)}} className="burgermenu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

               
            </div>

            
                {/* {open && 
                <div className={`menu`}>

                        <ul>
                            <li>1</li>
                            <li>3</li>
                            <li>2</li>
                            <li>3</li>
                            <li>5</li>
                        </ul>

                </div>
                
                } */}
        </div>
    );
};

export default Navbar;