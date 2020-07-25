import React, { useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            <li><NavLink to="/post">Post</NavLink></li>
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