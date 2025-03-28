import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPlane, FaUser, FaTags, FaQuestionCircle, FaSuitcase, FaSignOutAlt, FaConciergeBell, FaUserCircle, FaCog } from "react-icons/fa";
import img1 from "../images/logoair.png";

const Navbar = () => {
  const history = useHistory();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkToken = () => {
      setToken(localStorage.getItem("token"));
      setUsername(localStorage.getItem("username"));
    };
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername(null);
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Logo Styling */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={img1} className="logo mb-1" alt="home img" height="60" style={{ maxHeight: "60px", width: "auto" }} />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/">
                <FaHome size={22} />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/about">
                <FaInfoCircle size={22} />
                <span>About Us</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/flights">
                <FaPlane size={22} />
                <span>Flights</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/manage-booking">
                <FaSuitcase size={22} />
                <span>Manage Booking</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/check-in">
                <FaUser size={22} />
                <span>Check-in</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/deals">
                <FaTags size={22} />
                <span>Deals & Offers</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex flex-column align-items-center" to="/contact">
                <FaQuestionCircle size={22} />
                <span>Help Center</span>
              </NavLink>
            </li>
            {token && (
              <li className="nav-item">
                <NavLink className="nav-link d-flex flex-column align-items-center" to="/service">
                  <FaConciergeBell size={22} />
                  <span>Service</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {token ? (
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="btn btn-neon btn-lg rounded-pill dropdown-toggle"

                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ color:"rgb(8, 74, 132)", fontWeight: "bold" }} // Username Color Change
              >
              <FaUserCircle className="me-2" /> Profile
              </button>
              {showDropdown && (
                <ul className="dropdown-menu show" style={{ right: 0, left: "auto" }}>
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      
                      <FaUserCircle className="me-2" /> {username || "Guest"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/settings">
                      <FaCog className="me-2" /> Settings
                    </NavLink>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <FaSignOutAlt className="me-2" /> Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <NavLink className="btn btn-outline-primary btn-lg rounded-pill" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
