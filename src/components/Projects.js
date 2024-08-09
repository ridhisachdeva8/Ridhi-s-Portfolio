import React from "react";
import photo1 from "./Proj1.png";
import photo2 from "./Proj2.png";
import photo3 from "./Proj3.png";
import photo4 from "./Proj4.png";
import photo5 from "./Proj5.png";

export default function Projects() {
  return (
    <>
      <div className="project-container ">
        <h1 style={{ fontWeight: "600" , fontFamily:"TimesNewRoman"}}>Projects</h1>
        <p className="project-intro">
          As a frontend React developer, I create dynamic and responsive web
          applications, including e-commerce platforms, news websites, and a
          surplus food marketplace. My projects showcase proficiency in React,
          HTML, CSS, and JavaScript, with a strong focus on UI/UX design. I
          excel at transforming complex requirements into seamless, user-centric
          digital experiences.
        </p>

        <div className="project-box">
          <div className="project-description">
            <h3>COMMUNITY PAGE</h3>
            <p>
              <i>July 2024</i>
            </p>
            <ul>
              <li> Created secure signup and login pages.</li>
              <li>Implemented seamless navigation using React Router.</li>
              <li>
                Integrated a responsive carousel component using Bootstrap.
              </li>
              <li>Developed 3 additional feature-rich pages.</li>
            </ul>
          </div>
          <div className="project-image">
            <img src={photo1} alt="Project1 " />
          </div>
        </div>
        <div className="project-box">
          <div className="project-description">
            <h3>TEXTUTILS</h3>
            <p>
              <i>June 2024</i>
            </p>
            <ul>
    <li> A web application to convert user text into various useful formats, utilizing React.js.</li>
              <li>Implemented features like text capitalization, lowercasing, reversing, and word count.</li>
              <li>
              Enhanced user interface design and ensured responsiveness across devices using CSS and Bootstrap.
              </li>
             
            </ul>
          </div>
          <div className="project-image">
            <img src={photo2} alt="Project2 " />
          </div>
        </div>
        <div className="project-box">
          <div className="project-description">
            <h3>CURRENCY CONVERTER </h3>
            <p>
              <i>Mar 2024</i>
            </p>
            <ul>
              <li>Integrated external APIs, such as the Open Exchange Rates API, to retrieve real-time currency exchange 
              rates, enabling accurate and up-to-date currency conversions within the application.</li>
              
            </ul>
          </div>
          <div className="project-image">
            <img src={photo3} alt="Project3 " />
          </div>
        </div>
        <div className="project-box">
          <div className="project-description">
            <h3>ROCK PAPER SCISSOR GAME </h3>
            <p>
              <i>Feb 2024</i>
            </p>
            <ul>
              <li>  Developed a widely recognized game using HTML, CSS, and JavaScript.</li>
              <li>Designed a dynamic functionality that gives users a real-time view of their game score and leaderboard 
              rankings, resulting in a 20% increase in user retention.</li>
              
            </ul>
          </div>
          <div className="project-image">
            <img src={photo4} alt="Project4 " />
          </div>
        </div>
        <div className="project-box">
          <div className="project-description">
            <h3>SHOPPING WEBSITE FOR WOMEN</h3>
            <p>
              <i>Oct 2023</i>
            </p>
            <ul>
              <li>Collaborated in a 2-person team to design and implement the frontend of a mini-project, utilizing JavaScript.</li>
              <li>Applied responsive design principles using CSS media queries to ensure optimal display and functionality.</li>
             
            </ul>
          </div>
          <div className="project-image">
            <img src={photo5} alt="Project5" />
          </div>
        </div>
      </div>
    </>
  );
}
