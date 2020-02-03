import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand mb-0 h1">
        NacossUniuyo <span class="navbar-text"></span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapseContent"
        aria-controls="#navbarCollapseContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapseContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" href="#">
              Home
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" href="#">
              Courses
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" href="#">
              News
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" href="#">
              Pay Dues
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
