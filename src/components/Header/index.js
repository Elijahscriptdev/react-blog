import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div>
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                social media links
                {/* <a href="mailto:elijjaaahhhh@gmail.com" class="footer-link">
            elijjaaahhhh@gmail.com
        </a> */}
        {/* <ul class="social-list">
            <li class="social-list-item">
                <a href="https://github.com/Elijahscriptdev" class="social-list-link"><i class="fab fa-github"></i></a>
            </li>
            <li class="social-list-item">
                <a href="https://twitter.com/ElijahObominuru" class="social-list-link"><i class="fab fa-twitter-square"></i></a>
            </li>
            <li class="social-list-item">
                <a href="https://www.linkedin.com/in/elijah-obominuru-0b730b143/" class="social-list-link"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="social-list-item">
                <a href="https://www.instagram.com/elijjaaahhhh/" class="social-list-link"><i class="fab fa-instagram"></i></a>
            </li>
        </ul> */}
            </div>
        </header>
    </div>
   )

 }

export default Header;