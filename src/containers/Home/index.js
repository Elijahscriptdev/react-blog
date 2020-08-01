import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPost from './RecentPost';
import blogPost from '../data/blog.json'
import { NavLink } from 'react-router-dom';
// import Hero from '../../components/Hero';


const Home = props => {

    // const galleryHeight = 450;
    // const galleryStyle = {
    //     height: galleryHeight+'px',
    //     overflow: 'hidden'
    // }

    // const sideImageHeight =  galleryHeight/3;

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
        <div>
            <Card>
                <div className="galleryPost" >
                    <div className="imageWrapper" style={{ width:'70%' }}>
                    <div className="blogs">
                        <span className="Category">{post[1].blogCategory}</span>
                        <NavLink to="/post/2" className="Nav_link" >
                        <h1 className="post">{post[1].blogTitle}</h1>
                        </NavLink>
                        
                    </div>
                        <img src={require('../../blogPostImages/' + post[1].blogImage)} alt="jjj"/>
                    </div>
                    <div className="sideImageWrapper" style={{ width:'30%'}}>
                        <div className="blog-wrapper">
                            <div className="blogs">
                                <span className="Category">{post[4].blogCategory}</span>
                                <NavLink to="/post/2" className="Nav_link" >
                                <h1 className="post">{post[4].blogTitle}</h1>
                                </NavLink>
                            </div>
                            <img src={require('../../blogPostImages/' + post[4].blogImage)} alt="jjj"/>
                        </div>
                        <div className="blog-wrapper">
                            <div className="blogs">
                                <span className="blog">{post[2].blogCategory}</span>
                                <NavLink to="/post/2" className="Nav_link" >
                                <h1 className="post">{post[2].blogTitle}</h1>
                                </NavLink>
                            </div>
                            <img className="one" src={require('../../blogPostImages/' + post[2].blogImage)} alt="jjj"/>
                        </div>
                        <div className="blog-wrapper">
                            <div className="blogs">
                                <span className="blog">{post[3].blogCategory}</span>
                                <NavLink to="/post/2" className="Nav_link" >
                                <h1 className="post">{post[3].blogTitle}</h1>
                                </NavLink>
                            </div>
                            <img className="two" src={require('../../blogPostImages/' + post[3].blogImage)} alt="jjj"/>
                        </div>
                    </div>
                </div>
            </Card>

            <section className="HomeContainer">
                <RecentPost />

                <Sidebar />

            </section>
            
        </div>
    )
}

export default Home; 