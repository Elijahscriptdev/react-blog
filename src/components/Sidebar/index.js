import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../containers/data/blog.json'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const post = blogPost.data
    setPosts(post)
  },posts);

  return(
    <div className="sideBarContainer">
      <Card style={{ marginBottom:"20px" }}>
        <div className="cardHeader network">
          <span className="cardTitle">About-Us</span>
          <img alt="Elijah" src="http://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg" />
        </div>
        <div className="cardBody">
          <p>
          I am passionate about <strong>Full-Stack Development</strong> with experience in developing Web applications
          <strong>(Ruby on Rails and Javascript(React))</strong>.
          </p>
        </div>
      </Card>
      <Card style={{ marginBottom:"20px" }}>
        <div className="cardHeader network">
          <span className="cardTitle">Social Networks</span>
        </div>
        <div className="socialNetworks">
          <ul>
              <li className="social-list">
                  <a href="https://github.com/Elijahscriptdev" className="social-list"><i className="fab fa-github"></i></a>
              </li>
              <li className="social-list">
                  <a href="https://twitter.com/ElijahObominuru" className="social-list"><i className="fab fa-twitter-square"></i></a>
              </li>
              <li className="social-list">
                  <a href="https://www.linkedin.com/in/elijah-obominuru-0b730b143/" className="social-list"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li className="social-list">
                  <a href="https://www.instagram.com/elijjaaahhhh/" className="social-list"><i className="fab fa-instagram"></i></a>
              </li>
          </ul>
          {/* <img alt="Elijah" src={require("../../containers/blogPostImages/nysc1.jpg")} /> */}
          </div>  
      </Card>
      <Card >
        <div className="cardHeader network">
          <span className="cardTitle">Recent Posts</span>
        </div>
        <div className="recentPosts">

          {
            posts.map(post => {
              return(
                <NavLink to='/${post.id}'>
                  <div className="recentPost">
                  <h4>{post.blogTitle}</h4>
                  <span className="">{post.postedOn}</span>
                </div>
                </NavLink>
              )
            })
          }
          
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar;