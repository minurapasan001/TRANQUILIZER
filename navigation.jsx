import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          TRANQUILIZER
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                face detection
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
              Services
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              About
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
              Contact
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                
              </a>
            </li>

            <li>
            <Link to="/LogIn" className="page-scroll">
                  <h3>sing in </h3></Link></li>
                
    
            {/* <i className={d.icon6 } ></i>
                  <Link to="/ChromeExtension" className="page-scroll">
                  <h3>{d.name6}</h3></Link>
                    <p>{d.text6}</p> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
