import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <div className="title">
        <h2>Portfolio</h2>
      </div>
      <div className="nav-border">
        <ul className="nav-container">
          <li>
            <Link to="/">
              <span>🏡</span>
            </Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/notes">
              <span>🗒</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/SocialMedia">
              <span>👥</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
