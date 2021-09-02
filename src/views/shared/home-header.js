import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomeHeader(props) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  }

  const [showStyle, setShowStyle] = useState(false);
  const fnSetShowStyle = () => {
    setShowStyle(!showStyle);
  }
  
  var setTheme = props.handlerSetTheme;
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Jobs Repository
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={toggleClass}></span>
          </button>

          <div
            className={
              isActive
                ? "collapse navbar-collapse show"
                : "navbar-collapse collapse"
            }
            id="navbarColor02"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item"><a className="nav-link" href="/job-list">Job List</a></li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/post-a-job">Post A Job</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/job-description">Job Desctipion</Link>
              </li> */}
              <li className="nav-item dropdown" onClick={fnSetShowStyle}>
                <span className="nav-link dropdown-toggle show" onClick={fnSetShowStyle} data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Theme</span>
                <div className={ showStyle ? "dropdown-menu show" : "dropdown-menu"} data-bs-popper="none">
                  <span className="dropdown-item" onClick={() => setTheme('cerulean')}>Cerulean</span>
                  <span className="dropdown-item" onClick={() => setTheme('cosmo')}>Cosmo</span>
                  <span className="dropdown-item" onClick={() => setTheme('cyborg')}>Cyborg</span>
                  <span className="dropdown-item" onClick={() => setTheme('darkly')}>Darkly</span>
                  <span className="dropdown-item" onClick={() => setTheme('litera')}>Litera</span>
                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item" onClick={() => setTheme('slate')}>Slate</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeHeader;
