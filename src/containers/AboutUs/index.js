import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import RecentPost from "../Home/RecentPost";
import Sidebar from "../../components/Sidebar";

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  return (
    <div className="about">
      <Card
        style={{
          marginTop: "20px"
        }}
      >
        <div className="about-content">
          <h1> About Me </h1>
          <img src="http://res.cloudinary.com/elijjaaahhhh/image/upload/v1595706025/elijah_rhm0qv.jpg" alt="elijah" />
          <p>
            I am Elijah Obominuru, I am a Full-Stack Developer with
            significant hands-on experience working with Ruby on Rails,
            Javascript, SQL, Postgresql and TDD.
            <br /> <br />
            While I have been privileged to
            see some projects and tasks through successful completion and
            deployment, I will love to join a unique organization / platform
            with growth opportunities where my skills and abilities can be fully
            harnessed and sharpened for greater rewards and deliverables. I am
            proactive, diligent and self - motivated.
            <br /> <br />
            I am a good team player and
            maintain a positive approach towards work and assigned duties and
            responsibilities.I have a can - do spirit and can work effectively
            under work pressure and deliver on defined timelines and deadlines.I
            communicate eloquently and know how to multi - task and collaborate
            effectively with teams while managing conflicts and raising the
            standards of excellence and closures.I am flexible and adaptable
            even in changing environments.
          </p>
        </div>
      </Card>

      {/* <Card
        style={{
          marginTop: "20px",
          width: "20%"
        }}
      >
      </Card> */}
    </div>
  );
};

export default AboutUs;
