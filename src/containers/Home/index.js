import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPost from './RecentPost';
// import Hero from '../../components/Hero';


const Home = props => {

    // const galleryHeight = 450;
    // const galleryStyle = {
    //     height: galleryHeight+'px',
    //     overflow: 'hidden'
    // }

    // const sideImageHeight =  galleryHeight/3;

    return(
        <div>
            <Card>
                <div className="galleryPost" >
                    <div className="imageWrapper" style={{ width:'70%' }}>
                            <img src={require("../../blogPostImages/nysc1.jpg")} alt="nysc" />
                    </div>
                    <div className="sideImageWrapper" style={{ width:'30%'}}>
                            <img src={require("../../blogPostImages/nysc1.jpg")} alt="nysc" />
                            <img src={require("../../blogPostImages/nysc1.jpg")} alt="nysc" />
                            <img src={require("../../blogPostImages/nysc1.jpg")} alt="nysc" />
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