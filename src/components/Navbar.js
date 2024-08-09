import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ minHeight: '100px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontSize:"170%", fontWeight:"500"}}>RIDHI SACHDEVA </Link>
    <Link className="navbar-brand" to="/" style={{fontSize:"100%"}} >/FRONTEND DEVELOPER</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">ABOUT ME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">RESUME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">PROJECTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT ME</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}




