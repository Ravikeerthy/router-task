import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Style/SideBar.css";

const SideNavBar = () => {
  return (
    <div>
      <div className="container" id="heading-design">
        <div>
          <h1>Topics</h1>
        </div>
        <div>
          <h1>Trending Articles</h1>
        </div>
      </div>
      <div className="container d-flex align-item-center">
        <nav className="sidebar">
          <ul className="nav-flex-column">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <div className="arrow">
                  All <i class="bi bi-arrow-right-short"></i>
                </div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/fsd"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <div className="arrow">
                  Full Stack Developer <i class="bi bi-arrow-right-short"></i>
                </div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/datascience"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <div className="arrow">
                  Data Science <i class="bi bi-arrow-right-short"></i>
                </div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/cybersecurity"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <div className="arrow">
                  Cyber Security <i class="bi bi-arrow-right-short"></i>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/digitalmark"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <div className="arrow">
                  Digital Marketing <i class="bi bi-arrow-right-short"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div id="mainContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
