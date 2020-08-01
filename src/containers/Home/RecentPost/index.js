import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

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
    <div className="full" style={{width:"70%"}}>
                    <Card style={{marginBottom:"20px"}}>
                        <div className="postImageWrapper">
                            {/* <p>{post[0].blogTitle}</p> */}
                            <img src={require('../../../blogPostImages/' + post[0].blogImage)} alt="jjj"/>
                        </div>

                        <div className="recent" style={{textAlign:"center"}}>
                            <span>Featured</span>
                            <br /><br />
                            <h2>Fitness Mantra To Live Fit Life</h2>
                            <br />
                            <span>posted on July 21, 2016 by Faiz Khan</span>
                            <br /><br />
                            <p>
                            Midst first it, you're multiply divided. There don't, 
                            second his one given the he one third rule fruit, very. Fill. S
                            eed give firmament doesn't land, isn't lesser creeping. Abundantly you 
                            called signs waters yielding he cattle greater were evening.
                            </p>
                            <br /><br />
                            <NavLink to="/post/1">
                                <button>
                                    <p>Read more</p>
                                </button>
                            </NavLink>
                        </div>
                    </Card>

                    {/* <Card style={{marginBottom:"20px"}}>
                        Post 2
                    </Card> */}

                </div>
   )

 }

export default RecentPost