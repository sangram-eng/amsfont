import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);

  async function login() {
    setError("");

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

      const { token, username: resUsername, role } = response.data;

      if (token && resUsername && role) {
        // ✅ Store all necessary info in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("username", resUsername);
        localStorage.setItem("role", role);

        // Redirect to homepage
        history.push("/home");
      } else {
        setError("Invalid login response. Please contact support.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Login failed: ${error.response.data.error || "Invalid credentials"}`
        );
      } else if (error.request) {
        setError("Server not responding. Please try again later.");
      } else {
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

            <div className="mb-3">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-3 position-relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="form-control p-3 rounded-pill"
                placeholder="Enter your password"
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button className="btn btn-primary btn-lg rounded-pill w-100" onClick={login}>
              Login
            </button>

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
