import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import Gallery from "./Gallery/Gallery";

function Header() {
  const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container-header">
      <div className="navbar-items">
        <Link className="nav-item nav-link" to="/">
          ALUMNI
        </Link>
      </div>
      <div className={`navbar-items ${isActive ? "active" : ""}`}>
        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/gallery" onClick={Gallery}>
            Gallery
          </Link>
        </div>

        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/profile">
            My Profile
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/connect">
            Connect
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/signin">
            SignIn
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="nav-item nav-link" to="/" onClick={LogOut}>
            LogOut
          </Link>
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src = {img}  className="hamburger-menu-img"/>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
