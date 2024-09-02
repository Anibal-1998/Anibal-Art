import React from 'react'
import { FaLinkedin, FaBehance  } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "./Footer.css"
function Footer() {
  return (
    <footer className='footer'>
        <div class="footer-left">
            &copy; 2024 ANIBAL R. CANELA
        </div>
        <div class="footer-center">
            <a href="#"><IoMdMail/></a>
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaBehance/></a>
            <a href="#"><FaInstagram/></a>
        </div>
        <div class="footer-right">
            Web design by <a href="https://">Diego Aguero</a>
        </div>
    </footer>
  )
}

export default Footer