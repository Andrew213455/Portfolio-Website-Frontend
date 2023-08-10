import "./About.css";
import cloud from "../images/wordcloudthiiisone.png";
import skills from "../images/MERN skills.jpg";

const About = () => {
  return (
    <div className="About">
      {/* <div className="word-cloud" id="box">
        
      </div> */}
      <div className="aboutme">
        <div className="gradient-border" id="box">
          <div className="about-content-wrapper">
            <div className="about-content">
              <p>
                <span className="blue-letters">
                  My name is Andrew Woodring,{" "}
                </span>{" "}
                and I am a full stack software engineer with a passion for
                programming. I am always committed to continuous learning and
                growth, and I am confident that I can make a significant
                contribution to any team.
              </p>
              <img src={cloud} alt="" />
            </div>

            <div className="skills">
              <img src={skills} alt="" />
              <p>
                I started out as a hobby programmer with a strong foundation in{" "}
                <span className="blue-letters">
                  HTML, CSS, and JavaScript.{" "}
                </span>
                I took my knowledge to the next level during bootcamp using{" "}
                <span className="blue-letters">
                  React, TypeScript, Node.js, Express, MongoDB, web APIs, and
                  Firebase hosting.
                </span>
              </p>
            </div>
            <div className="education">
              <h3>Education</h3>
              <p>
                I achieved an overall score of 99% in my JavaScript Full Stack
                bootcamp at Grand Circus in 2023. I have worked on exciting
                projects such as "Zombie Village" and "Culinary Caddy", where I
                was able to contribute to the development of the project
                collaboratively.
              </p>
            </div>
            <div className="background">
              <h3>Background</h3>
              <p>
                I have a strong background in customer service, as a trainer and
                bartender at Texas RoadHouse from 2021 to 2023. This has given
                me excellent communication and interpersonal skills, which are
                essential for working effectively in a collaborative
                environment.
              </p>
            </div>
            <div className="future">
              <h3>Future</h3>
              <p>
                I am excited about the abundant opportunities for growth and
                skill development in the software engineering field, and I am
                eager to enhance my expertise and stay at the forefront of the
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
