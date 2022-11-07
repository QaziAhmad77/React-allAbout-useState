// rfc
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// impt
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/about" className="nav-link">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height: "30px", width: "30px", cursor: "pointer"}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height: "30px", width: "30px", cursor: "pointer"}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height: "30px", width: "30px", cursor: "pointer"}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height: "30px", width: "30px", cursor: "pointer"}}></div>
          </div>
          <div className={`form-check mx-5 form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault" />
            <label htmlFor="flexSwitchCheckDefault" className="form-check-label">{props.mode}</label>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 mx=5" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
  );
}
// pts
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Hello", about: "I'm Ahmad" };
