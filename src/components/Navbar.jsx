import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import about from "./About";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.homePage}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={about}>
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>

      <div className="form-check form-switch" >
        <input
          onChange={props.toggleDarkMode}
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={props.darkMode}
          defaultChecked={props.darkMode}
          height="center"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" height="center">


          <img
            src="https://static.thenounproject.com/png/3861733-200.png"
            style={{ width: "30px", height: "center" }}
          ></img>
        </label>
      </div>
      
    </nav>
  );
}
