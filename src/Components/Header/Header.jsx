import React from 'react'
import './Header.scss'
import logo from '../../utils/newLogo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
 
  return (
    <div className={`main-header ${showMenu ? "show-menu" : ""}`}>
    <div className="logo">
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo"></img>
        </Link>
    </div>

    <div className='navbar'>

    <nav className={`nav-links ${showMenu ? "show-menu" : ""}`}>
    <Link to={"/"} onClick={() => window.scrollTo(0, 0)}> Home</Link>
    <Link to={"/services"} onClick={() => window.scrollTo(0, 0)}>Services</Link>
    <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}> About Us</Link>
    <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>

    </nav>
    </div>
    <div className="hamburger-icon" onClick={toggleMenu}>
    &#9776; 
  </div>
  <div className='profile'>

  </div>
  </div>
  )
}

export default Header