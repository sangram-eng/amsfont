import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function register() {
    setError("");
    setSuccess("");

    if (!user.username || !user.email || !user.password || !user.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9090/ams/api/v1/auth/signup",
        {
          username: user.username,
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration Response:", response.data);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => history.push("/login"), 2000);
    } catch (error) {
      if (error.response) {
        console.error("Response Error:", error.response);

        // If the user already exists
        if (error.response.status === 400) {
          setError(
            <>
              User already exists. <NavLink to="/login">Login here</NavLink>
            </>
          );
        } else {
          setError(`Registration failed: ${error.response.data.message || "Please try again."}`);
        }
      } else if (error.request) {
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
            <h2 className="mb-4">Register</h2>

            {/* Username Input */}
            <div className="mb-3">
              <input
                name="username"
                value={user.username}
                onChange={handleChange}
                type="text"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <input
                name="email"
                value={user.email}
                onChange={handleChange}
                type="email"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <input
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
                className="form-control p-3 rounded-pill"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3">
              <input
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                type="password"
                className="form-control p-3 rounded-pill"
                placeholder="Confirm your password"
              />
            </div>

            {/* Error & Success Messages */}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}

            {/* Register Button */}
            <button className="btn btn-primary btn-lg rounded-pill w-100" onClick={register}>
              Register
            </button>

            {/* Login Link */}
            <p className="mt-3">
              Already have an account?{" "}
              <NavLink to="/login" className="btn btn-outline-primary btn-sm rounded-pill">
                Login here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
