import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
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
                <div style={{width:"70%"}}>
                    <Card style={{marginBottom:"20px"}}>
                        <div className="postImageWrapper">
                            <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1584497692/hermes-rivera-qbf59TU077Q-unsplash_mc7lec.jpg"/>
                        </div>

                        <div style={{textAlign:"center"}}>
                            <span>Featured</span>
                            <h2>Fitness Mantra To Live Fit Life</h2>
                            <span>
                            Midst first it, you're multiply divided. There don't, 
                            second his one given the he one third rule fruit, very. Fill. S
                            eed give firmament doesn't land, isn't lesser creeping. Abundantly you 
                            called signs waters yielding he cattle greater were evening. Sixth make 
                            moving the multiply dominion creature beast made subdue lights him. 
                            Green of lights in their first. It there winged called after upon him.
                            </span>
                        </div>
                    </Card>

                    <Card style={{marginBottom:"20px"}}>
                        Post 2
                    </Card>
                </div>

                <Sidebar />

            </section>
            
        </div>
    )
}

export default Home; 