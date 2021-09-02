import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HomeMasterClass extends Component {
    static propTypes = {
        isActive: PropTypes
    }

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
              <div className="container">
                <a className="navbar-brand" href="/">
                  Jobs Repository 
                </a>
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
        
                <div className={isActive ? 'collapse navbar-collapse show': "navbar-collapse collapse"} id="navbarColor02">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                        <span className="visually-hidden">(current)</span>
                      </a>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link" href="/job-list">Job List</a></li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="/post-a-job">
                        Post A Job
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container pad-top-90px">
                {children}
            </div>
          </>
        )
    }
}
