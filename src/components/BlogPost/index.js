import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <div className="blogPostContainer">
    <Card>
      <div className="blogHeader">
        <span className="blogCategory">Featured</span>
        <h1 className="postTitle">Beautiful is always beautiful</h1>
        <span className="postedBy">posted on july 25, 2020 by Elijah-dev</span>
      </div>

      <div className="postImageContainer">
        <img alt="Elijah-dev" src="https://res.cloudinary.com/elijjaaahhhh/image/upload/c_limit,h_1518,w_2901/v1584497691/austin-distel-uPK2TbJlvMQ-unsplash_pfgwwg.jpg" />
      </div>
    </Card>
    </div>
   )

 }

export default BlogPost;