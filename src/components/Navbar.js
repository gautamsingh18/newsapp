import React, { Component } from "react";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ color: "white" }}>
              NewsApp
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Business"
                    style={{ color: "white" }}
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Entertainment"
                    style={{ color: "white" }}
                  >
                    Entertainment
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Health"
                    style={{ color: "white" }}
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Science"
                    style={{ color: "white" }}
                  >
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Sports"
                    style={{ color: "white" }}
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Technology"
                    style={{ color: "white" }}
                  >
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
