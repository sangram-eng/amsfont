import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
  }, []);

  async function login() {
    setError(""); // Clear previous errors

    let item = new URLSearchParams();
    item.append("username", username);
    item.append("password", password);

    try {
      let response = await fetch("http://localhost:9090/ams/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: item,
      });

      let result = await response.text(); // Read response as text
      console.log("Raw Response:", result); // Debugging: Log API response

      // Extract token from response
      let tokenMatch = result.match(/Token:\s(\S+)/); // Regex to get token

      if (tokenMatch && tokenMatch[1]) {
        let token = tokenMatch[1]; // Get extracted token
        localStorage.setItem("token", token); // Store token for future API calls
        history.push("/home"); // Redirect to home after login
      } else {
        setError("Invalid response from server. Please try again.");
      }
    } catch (error) {
      setError("Error connecting to server. Please try again later.");
    }
  }

  return (
    <>
      <Navbar />
      <div className="col-mb-6 col-12 text-center">
        <br />
        <h1>Login Page</h1>
        <br />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username"
          id="username"
          name="username"
        />
        <br />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <br />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}

        <div className="col-sm-12">
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
        <br />

        {/* Register link for new users */}
        <p>
          New user?{" "}
          <NavLink to="/register" className="btn btn-outline-primary">
            Register here
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Login;
