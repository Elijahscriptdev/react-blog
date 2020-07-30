import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../containers/data/blog.json'
import { NavLink } from 'react-router-dom';
import SocialMediaIcon from '../SocialMediaIcon';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const post = blogPost.data
    setPosts(post)
  },[posts]);

  return(
    <div className="sideBarContainer" style={{ width: props.width }}>
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
        <SocialMediaIcon style={{ color:"red" }} />
          {/* <img alt="Elijah" src={require("../../blogPostImages/nysc1.jpg")} /> */}
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
                <NavLink key={post.id} to={`/post/${post.id}`}>
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