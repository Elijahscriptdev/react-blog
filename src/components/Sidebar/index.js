import React from 'react'
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sideBarContainer">
      <Card style={{ marginBottom:"20px" }}>
        <div className="sideHeader">
          <span className="sideTitle">About-Us</span>
          <img alt="Elijah" src="http://res.cloudinary.com/elijjaaahhhh/image/upload/c_scale,w_408/v1595702797/bosses_waypez.jpg" />
        </div>
      </Card>
      <Card>
        <div className="sideHeader network">
          <span className="sideTitle">Social Networks</span>
          <img alt="Elijah" src={require("../../containers/blogPostImages/nysc1.jpg")} />
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar;