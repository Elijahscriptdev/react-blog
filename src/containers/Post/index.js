import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';

/**
* @author
* @function Post
**/

const Post = (props) => {

  // console.log(props);
  
  return(
    <section className="container">
      <BlogPost {...props} />
      {/* <Sidebar /> */}
    </section>
   )

 }

export default Post