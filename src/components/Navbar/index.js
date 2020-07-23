import React, { useState } from 'react'
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("search");
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="search" />
            <img onClick={openSearch} className="searchIcon"  alt="search" src={require('../../assets/icons/search.png')} />
          </form>
        </div>
    </div>
   )

 }

export default Navbar;