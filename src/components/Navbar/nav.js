import React from "react";
import logo from "./logo.png";
import "./nav.css";
export default function Nav(props) {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} height={100}></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">MEN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">WOMEN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">KIDS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">BEAUTY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">HOME AND KITCHEN</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 search" type="search" placeholder="Search AJIO" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  );
}
