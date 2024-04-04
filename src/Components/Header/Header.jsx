import React, { useState } from 'react';
import './Header.scss';
import logo from '../../utils/newLogo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to close the menu
    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className={`main-header ${showMenu ? "show-menu" : ""}`}>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>

            <div className='navbar'>
                <nav className={`nav-links ${showMenu ? "show-menu" : ""}`}>
                    <Link to={"/"} onClick={closeMenu}> Home</Link>
                    <Link to={"/services"} onClick={closeMenu}>Services</Link>
                    <Link to={"/about"} onClick={closeMenu}> About Us</Link>
                    <Link to={"/contact"} onClick={closeMenu}>Contact Us</Link>
                </nav>
            </div>

            <div className="hamburger-icon" onClick={toggleMenu}>
                &#9776;
            </div>

            <div className='profile'>
                {/* Add profile content here */}
            </div>
        </div>
    );
}

export default Header;

