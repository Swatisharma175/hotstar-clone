import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <i
        className="fa-solid fa-bars menu-icon"
        href="https://www.google.co.in"
        target="_blank"
      />
      <img
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt=""
      />
      <ul className="nav-links nav-responsive">
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TV
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Movies
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Hindi</li>
            <li>Bengali</li>
            <li>Telugu</li>
            <li>Malayalam</li>
            <li>Tamil</li>
            <li>Kannada</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sports
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <button
            className="btn btn-secondary dropdown-toggle dropdown-button"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Disney+
          </button>
          <ul className="dropdown-menu" aria-labelledby="">
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Asianet</li>
          </ul>
        </li>
      </ul>

      <div className="right-container">
        <div className="search-field">
          <input type="text" className="search-box" placeholder="search" />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <button className="sub-btn">subscribe</button>
        <a href="/" className="login-link">
          login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;