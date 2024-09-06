import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="nav">
        <ul className='nav-links'>
            <li className='nav-brand'>ANIBAL R. CANELA</li>
            <li><NavLink to="/" end className={({isActive}) => (isActive ? "nav-link-on" : "")}>WORKS</NavLink></li>
            <li><NavLink to="/shop" end className={({isActive}) => (isActive ? "nav-link-on" : "")}>SHOP</NavLink></li>
            <li><NavLink to="./bio" end className={({isActive}) => (isActive ? "nav-link-on" : "")}>BIO</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar