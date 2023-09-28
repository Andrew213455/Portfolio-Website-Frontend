import "./Portfolio.css";
import CC from "../images/iconcc.jpg";
import Village from "../images/zombieVillage.png";
import Penguin from "../images/club-penguin.png";
import Vibe from "../images/Vibe-link.png";
import Card from "../images/credit-card-webpage.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const Portfolio = () => {
  const [popUp, setPopUp] = useState(false);
  const [project, setProject] = useState("");

  return (
    <div className="Portfolio">
      <div className="gradient-border" id="box">
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
          <div className="project-box">
            <p className="blue-letters">Credit Card WebPage</p>
            <img
              src={Card}
              alt="Credit Card Webpage"
              onClick={() => {
                setPopUp(true);
                setProject("card");
              }}
            />
          </div>
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
          {project === "caddy" && (
            <div className="project-info">
              <Link to="https://culinarycaddy.com/">
                <h2 className="blue-letters">Culinary Caddy</h2>
              </Link>
              <img src={CC} alt="culinary caddy" />
              <div className="caddy-info">
                <p id="api">
                  Due to API cost the site is currently not working!
                </p>
                <YoutubeEmbed embedId="RSmBNzsNQjg" />
                <div className="info">
                  <p>
                    Culinary Caddy is my keystone project from Grand Circus!
                  </p>
                  <p>
                    It uses the Spoonacular API to access a vast database of
                    recipes, and it provides you with all the information you
                    need to make them, including step-by-step instructions,
                    nutritional information, and ratings from other users. You
                    can search for recipes by name, ingredient, cuisine, or
                    dietary restriction. Once you find a recipe, you can view
                    detailed information about it, including the ingredients,
                    instructions, nutritional information, and ratings.
                  </p>
                  <p>
                    {" "}
                    Save your favorite recipes for future reference. Rate
                    recipes to help other users find the best recipes. Add notes
                    to recipes. Set timers for recipes. Get status updates on
                    recipes and more!
                  </p>
                  <p>
                    {" "}
                    Culinary Caddy is the perfect tool for anyone who loves to
                    cook. It's easy to use, and it has everything you need to
                    find and cook delicious recipes.
                  </p>
                  <p>
                    {" "}
                    Here are some additional features of Culinary Caddy:
                  </p>{" "}
                  <ul>
                    <li>
                      User authorization: Users can create an account and sign
                      in to save their favorite recipes, rate recipes, add notes
                      to recipes.
                    </li>
                    <li>
                      Rating system: Users can rate recipes on a scale of 1 to 5
                      stars. The average rating for each recipe is displayed, so
                      you can easily see which recipes are the most popular.
                    </li>
                    <li>
                      Favorite recipe feature: Users can save their favorite
                      recipes to a list. This makes it easy to find recipes that
                      you want to cook again later.
                    </li>
                  </ul>
                  <p>
                    Culinary Caddy is a free web app that is available to
                    everyone. To get started, simply visit the website and
                    create an account. Then, you can start searching for recipes
                    and cooking delicious meals.
                  </p>
                </div>
              </div>
            </div>
          )}
          {project === "zombie" && (
            <div className="project-info">
              <Link to="https://culinarycaddy.com/">
                <h2>Zombie Village</h2>
              </Link>
              <img src={Village} alt="Zombie Village game!" />
            </div>
          )}
          {project === "penguin" && <div className="project-info">penguin</div>}
          {project === "vibe" && <div className="project-info">vibe</div>}
          {project === "card" && <div className="project-info">card</div>}
        </div>
      )}
      {popUp && <div className="black"></div>}
    </div>
  );
};

export default Portfolio;
