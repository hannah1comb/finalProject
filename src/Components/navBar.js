import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home</a>
            <a className="nav-item nav-link" href="/hikes">Hiking</a>
            <a className="nav-item nav-link" href="/cities">Cities</a>
          </div>
        </div>
      </nav>
    );
  }
}
