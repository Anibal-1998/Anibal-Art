import React, {useState, useEffect} from 'react'
import "./Footer.css"
function Footer() {

  const [hour, setHour] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
  }, [])
  const hourNow = hour.toLocaleTimeString();

  return (
    <footer className='footer'>
        <div className="footer-left">
          <p>&copy;1998 - Present </p>
          <p>All Rights Reserved</p>
        </div>
        <div className="footer-center">
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Linkedin</a></p>
        </div>
        <div className="footer-center">
          <p> Don't waste </p>
          <p>time {hourNow}</p>
        </div>
        <div className="footer-right">
          <p>Web design </p>
          <p>by <a href="https://www.linkedin.com/in/d-aguero/">Diego Aguero</a></p>
        </div>
    </footer>
  )
}

export default Footer