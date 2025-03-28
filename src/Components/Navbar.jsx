import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import img1 from "../images/worldd.png";

const Navbar = () => {
  const history = useHistory();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Update state when token changes
  useEffect(() => {
    const checkToken = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", checkToken); // Listen for storage changes
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // Update state after logout
    history.push("/"); // Redirect to home
  };

  return (
    <>
      <div className="header-img">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg bg-white text-dark">
              <div className="container-fluid">
                {/* Logo */}
                <NavLink className="navbar-brand" to="/">
                  <img src={img1} className="logo" alt="home img" />
                </NavLink>

                {/* Navbar Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links + Search + Logout */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* Navbar Links (Centered) */}
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    {token && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/service">
                          Service
                        </NavLink>
                      </li>
                    )}
                  </ul>

                  {/* Search Bar (Middle) */}
                  <form className="d-flex mx-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>

                  {/* Logout Button (Right Side) */}
                  {token ? (
                    <button className="btn btn-danger ms-3" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <NavLink className="btn btn-primary ms-3" to="/login">
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
