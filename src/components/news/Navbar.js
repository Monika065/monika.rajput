import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ mode, setMode, text, setText }) {
  const [linkClicked, setLinkClicked] = useState("home");

  const linkStateHandler = (e) => {
    setLinkClicked(e.target.id);
  };
 

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}
      >
        <div className="  d-flex fs-4 py-1 container-fluid ">
          <Link className="navbar-brand nav-link" to="/">
            {<b className="fs-2 ">TOI + </b>}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li onClick={linkStateHandler} className="nav-item ">
                <Link
                  id="home"
                  className={`nav-link ${
                    linkClicked === "home" 
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="business"
                  className={`nav-link ${
                    linkClicked === "business" ? `color` : ""
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="entertainment"
                  className={`nav-link ${
                    linkClicked === "entertainment" ? `color` : ""
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="general"
                  className={`nav-link ${
                    linkClicked === "general" ? `color` : ""
                  }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="health"
                  className={`nav-link ${
                    linkClicked === "health" ? `color` : ""
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="science"
                  className={`nav-link ${
                    linkClicked === "science" ? `color` : ""
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="sports"
                  className={`nav-link ${
                    linkClicked === "sports" ? `color` : ""
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
                <Link
                  id="technology"
                  className={`nav-link ${
                    linkClicked === "technology" ? `color` : ""
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li onClick={linkStateHandler} className="nav-item">
              <Link  
                  id="Login"
                  className={`nav-link ${
                    linkClicked === "Login" ? `color` : ""
                  }`}
                  to="/Login"
                >
                Login
                </Link>
              </li>
            </ul>
          </div>
         
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{
                color: mode === "dark" ? "white" : "black",
              }}
            >
            
            </label>
          </div>
        
      </nav>
  </div>
  );
}

export default Navbar;
