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
        <li className="nav-items nav-responsive">
          <a href="/">TV</a>
        </li>
        <li className="nav-items nav-responsive">
          <a href="/">movies</a>
        </li>
        <li className="nav-items nav-responsive">
          <a href="/">sports</a>
        </li>
        <li className="nav-items nav-responsive">
          <a href="/">disney+</a>
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
