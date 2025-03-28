import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Login = () => {
  const [username, setUsername] = useState(""); // Username field
  const [password, setPassword] = useState(""); // Password field
  const [error, setError] = useState(""); // Error handling
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home"); // Redirect if already logged in
    }
  }, [history]);

  async function login() {
    setError(""); // Clear previous errors

    const item = new URLSearchParams();
    item.append("username", username);
    item.append("password", password);

    try {
      const response = await axios.post(
        "http://localhost:9090/ams/api/v1/auth/login",
        item,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );

      console.log("Login Response:", response.data); // Debugging: Log API response

      // Check if response contains the expected 'token' and 'username'
      if (response.data.token && response.data.username) {
        localStorage.setItem("token", response.data.token); // Store token
        localStorage.setItem("username", response.data.username); // Store username
        history.push("/home"); // Redirect to home after login
      } else {
        setError("Invalid login response. Please contact support.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        console.error("Response Error:", error.response);
        setError(
          `Login failed: ${error.response.data.message || "Invalid credentials"}`
        );
      } else if (error.request) {
        // No response received from server
        console.error("Request Error:", error.request);
        setError("Server not responding. Please try again later.");
      } else {
        console.error("Axios Error:", error.message);
        setError("Unexpected error occurred. Please try again.");
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
          <div className="card-body text-center">
            <h2 className="mb-4">Login</h2>

            {/* Username Input */}
            <div className="mb-3">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your password"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-danger">{error}</p>}

            {/* Login Button */}
            <button className="btn btn-primary btn-lg rounded-pill w-100" onClick={login}>
              Login
            </button>

            {/* Register Link */}
            <p className="mt-3">
              New user?{" "}
              <NavLink to="/register" className="btn btn-outline-primary btn-sm rounded-pill">
                Register here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
