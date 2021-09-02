import React, { useState } from "react";
//import { Link } from "react-router-dom";

function AppMainHeader(props) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  }

  const [showStyle, setShowStyle] = useState(false);
  const fnSetShowStyle = () => {
    setShowStyle(!showStyle);
  }

  var setTheme = props.handlerSetTheme;

  const [themName, setThemeName] = useState('Cosmo');
  const fnSetThemeName = (val, name) => {
    setTheme(val);
    setThemeName(name);
    setActive(false);
    setShowStyle(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand logoTitle"> Job Description </span>
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

          <div className={isActive ? "collapse navbar-collapse show" : "navbar-collapse collapse"} id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown" onClick={fnSetShowStyle}>
                <span className="nav-link dropdown-toggle show" onClick={fnSetShowStyle} data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Theme {themName}</span>
                <div className={ showStyle ? "dropdown-menu show" : "dropdown-menu"} data-bs-popper="none">
                  <span className="dropdown-item" onClick={() => fnSetThemeName('slate', 'Slate')}>Slate</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('cyborg','Cyborg')}>Cyborg</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('vapor','Vapor')}>Vapor</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('darkly','Darkly')}>Darkly</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('litera','Litera')}>Litera</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('cerulean','Cerulean')}>Cerulean</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('lumen','Lumen')}>Lumen</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('journal','Journal')}>Journal</span>
                  
                  <span className="dropdown-item" onClick={() => fnSetThemeName('morph','Morph')}>Morph</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('quartz','Quartz')}>Quartz</span>                  
                  <span className="dropdown-item" onClick={() => fnSetThemeName('spacelab','Spacelab')}>Spacelab</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('superhero','Super Hero')}>Super Hero</span>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('united','United')}>United</span>

                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item" onClick={() => fnSetThemeName('cosmo','Cosmo')}>Cosmo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AppMainHeader;
