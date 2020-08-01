import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import blogPost from '../../data/blog.json'

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {


    const [post, setPost] = useState({
    id: "" ,
    blogCategory: "" ,
    blogTitle : "" ,
    postedOn: "" ,
    author: "" ,
    blogImage: "" ,
    blogText: ""
  });

  useEffect(() => {
    const post = blogPost.data
    setPost(post)
  },[post]);

  if(post.blogImage == "") return null;

  return(
    <div style={{width:"70%"}}>
                    <Card style={{marginBottom:"20px"}}>
                        <div className="postImageWrapper">
                            {/* <p>{post[0].blogTitle}</p> */}
                            <img src={require('../../../blogPostImages/' + post[0].blogImage)} alt="jjj"/>
                        </div>

                        <div style={{textAlign:"center"}}>
                            <span>Featured</span>

                            <h2>Fitness Mantra To Live Fit Life</h2>

                            <span>posted on July 21, 2016 by Faiz Khan</span>

                            <p>
                            Midst first it, you're multiply divided. There don't, 
                            second his one given the he one third rule fruit, very. Fill. S
                            eed give firmament doesn't land, isn't lesser creeping. Abundantly you 
                            called signs waters yielding he cattle greater were evening.
                            </p>
                            
                            <button>Read more</button>
                        </div>
                    </Card>

                    <Card style={{marginBottom:"20px"}}>
                        Post 2
                    </Card>

                </div>
   )

 }

export default RecentPost