import React from 'react'
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
        <ul className='nav-links'>
            <li className='nav-brand'>ANIBAL R. CANELA</li>
            <li><a href="#" className='nav-link-on'>WORKS</a></li>
            <li> <a href="#">SHOP</a></li>
            <li> <a href="./bio">BIO</a></li>
        </ul>
    </nav>
  )
}

export default Navbar