import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../containers/data/blog.json'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  
  const [post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPost(post)
  },post);


  return(
    <div className="blogPostContainer">
    <Card>
      <div className="blogHeader">
        <span className="blogCategory">Featured</span>
        <h1 className="postTitle">{post.blogTitle}</h1>
        <span className="postedBy">posted on july 25, 2020 by Elijah-dev</span>
      </div>

      <div className="postImageContainer">
        <img alt="Elijah-dev" src="https://res.cloudinary.com/elijjaaahhhh/image/upload/c_limit,h_1518,w_2901/v1584497691/austin-distel-uPK2TbJlvMQ-unsplash_pfgwwg.jpg" />
      </div>

      <div className="blogContent">
        <h3>Post Title</h3>
        <p>lorem 20</p>
      </div>
    </Card>
    </div>
   )

 }

export default BlogPost;