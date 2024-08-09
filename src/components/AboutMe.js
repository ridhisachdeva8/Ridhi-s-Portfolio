import React, { useState, useEffect } from 'react';
import profile from './profile.jpg';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    const texts = ["UI/UX Designer", "Front-End Developer"];
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [typing, setTyping] = useState(true);
  
    useEffect(() => {
        let typingTimeout;
        let deletingTimeout;
        
        if (typing) {
          if (charIndex < texts[textIndex].length) {
            typingTimeout = setTimeout(() => {
              setDisplayText(prev => texts[textIndex].substring(0, charIndex + 1));
              setCharIndex(charIndex + 1);
            }, 100);
          } else {
            setTimeout(() => {
              setTyping(false);
            }, 2000);
          }
        } else {
          if (charIndex > 0) {
            deletingTimeout = setTimeout(() => {
              setDisplayText(prev => texts[textIndex].substring(0, charIndex - 1));
              setCharIndex(charIndex - 1);
            }, 100);
          } else {
            setTimeout(() => {
              setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
              setTyping(true);
            }, 1000);
          }
        }
    
        return () => {
          clearTimeout(typingTimeout);
          clearTimeout(deletingTimeout);
        };
      }, [charIndex, typing, textIndex]);
    
      useEffect(() => {
        setDisplayText('');
        setCharIndex(0);
      }, [textIndex]);
  return (
    <div className="container-fluid">
        <div className=" position-absolute">
    <div className="left col-md-6 col-sm-12">
        <img src={profile} alt="profile" />
        <h1 className="font_3 my-3 name-heading">
            Ridhi
            <br/>
            Sachdeva
            </h1>
            <div className="line my-4"></div>
            <p className="role-description">FRONT-END DEVELOPER</p>
            <div className="white-bar my-0">
            <div className="social-media">
            <a href="https://github.com/ridhisachdeva8" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/ridhi_sachdeva8/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.behance.net/ridhisachdeva1" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-behance"></i>
      </a>
      
      <a href="https://www.linkedin.com/in/ridhi-sachdeva-797592264/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
            </div>
    </div>
    <div className="right col-md-9 col-sm-12">
    <h1 className="hello-text">Hello !!</h1>
     <p>I turn innovative ideas into stunning, user-centric web experiences that captivate and inspire</p>
                <div className="my-3 button-container">
                <Link to="/resume">
                <button type="button" className="btn btn-outline-primary custom-button" >Resume</button>
                </Link>
                <Link to="/projects">
                <button type="button" className="btn btn-outline-primary custom-button mx-3" >Projects</button>
                </Link>
                </div>

                <p className="my-5" style={{  fontSize: "120%"}}>I'm <span className="purple"> Ridhi Sachdeva </span>
                and I'm thrilled to present to you my
                journey as a  React Front-End Developer with a
                proclivity for seeing things through a creative lens.
                <br/>
                <span id="element"></span></p>
                <div className="text-container" style={{display:"inline-block"}}>
                <p className="text">{displayText}</p>
                </div>
                </div>
               
  </div>
      <div className="row">
        <div className="col-md-5 bg-brown d-flex align-items-center justify-content-center">
          
        </div>
      </div>
    </div>
  )
}
