//rfc for react function based components
import React from 'react'
import PropTypes from 'prop-types' //impt
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/">{props.about}</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
//Setting proptype
Navbar.prototype={title:PropTypes.string,about:PropTypes.string}

//IS required
// Navbar.prototype={title:PropTypes.string.isRequired,about:PropTypes.string.isRequired}

//setting deafult proptype runs when no value is passed
Navbar.defaultProps={title:"Set title here",about:"About"};