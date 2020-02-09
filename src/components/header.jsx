import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand mb-0 h1">
        NacossUniuyo <span className="navbar-text"></span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapseContent"
        aria-controls="#navbarCollapseContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapseContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="#">
              Courses
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/payment" className="nav-link" href="#">
              Pay Dues
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
