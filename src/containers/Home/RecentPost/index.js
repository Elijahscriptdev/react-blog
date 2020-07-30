import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  return(
    <div style={{width:"70%"}}>
                    <Card style={{marginBottom:"20px"}}>
                        <div className="postImageWrapper">
                            <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1584497692/hermes-rivera-qbf59TU077Q-unsplash_mc7lec.jpg"/>
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