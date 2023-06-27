import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">ALUMNI</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/profile">Profile</Link>
                        <Link className="nav-item nav-link" to="/connect">Connect</Link>
                        <Link className="nav-item nav-link" to="/story">Story</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;