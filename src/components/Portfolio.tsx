import "./Portfolio.css";
import CC from "../images/iconcc.jpg";
import Village from "../images/zombieVillage.png";
import Penguin from "../images/club-penguin.png";
import Vibe from "../images/Vibe-link.png";
import { useState } from "react";

const Portfolio = () => {
  const [popUp, setPopUp] = useState(false);
  const [project, setProject] = useState("");

  return (
    <div className="Portfolio">
      <div className="project-container">
        <div className="project-box">
          <p className="blue-letters">Culinary Caddy</p>
          <img
            src={CC}
            alt="Culinary Caddy"
            onClick={() => {
              setPopUp(true);
              setProject("caddy");
            }}
          />
        </div>
        <div className="project-box">
          <p className="blue-letters">Zombie Village</p>
          <img
            src={Village}
            alt="Zombie Village Game"
            onClick={() => {
              setPopUp(true);
              setProject("zombie");
            }}
          />
        </div>
        <div className="project-box">
          <p className="blue-letters">Club Penguin Budgeting</p>
          <img
            src={Penguin}
            alt="Club Penguin Budgeting app"
            onClick={() => {
              setPopUp(true);
              setProject("penguin");
            }}
          />
        </div>
        <div className="project-box">
          <p className="blue-letters">Vibe Link</p>
          <img
            src={Vibe}
            alt="Vibe-Link"
            onClick={() => {
              setPopUp(true);
              setProject("vibe");
            }}
          />
        </div>
      </div>

      {popUp && (
        <div className="pop-up">
          <button
            onClick={() => {
              setPopUp(false);
            }}
          >
            X
          </button>
        </div>
      )}
      {popUp && <div className="black"></div>}
    </div>
  );
};

export default Portfolio;
