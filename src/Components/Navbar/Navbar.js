import React from 'react'
import '../Navbar/style.css'
import {Link} from 'react-router-dom'

export const Navbar = () =>{
    return(
        <div className="piaus">
            <nav>
                  <input type="checkbox" id="nav" className="hidden"></input>
                  <label for="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
                  <div className="logo">
                        <a href="/">PIAUS</a>
                  </div>
                  <div className="nav-wrapper">
                        <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/contact">Contact</Link></li>
                              <li><Link to="/project">Project</Link></li>
                        </ul>
                  </div>
            </nav>
        </div>
    )
}