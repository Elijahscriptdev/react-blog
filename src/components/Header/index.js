import React from 'react'

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
        </header>
    </div>
   )

 }

export default Header;