import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mb-0 h1" href="#">
        Author <span class="navbar-text">Blog-Title</span>
      </a>
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
            <a class="nav-link" href="#">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Videos
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Lexikon
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
