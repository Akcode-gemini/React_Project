import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <div>
          <nav className="nav">
            <div className="container">
              <div className="logo">
                <h2 className="navbarTitle">{props.title}</h2>
              </div>
              <div id="mainListDiv" className="main_list">
                <div className="navlinks">
                  {props.link && props.link.map((link, index) => (
                    <div key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                  ))}
                </div>
    
               
              </div>
            </div>
          </nav>
        </div>
      );
}
