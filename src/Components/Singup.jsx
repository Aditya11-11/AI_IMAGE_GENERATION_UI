


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  console.log(name,email,password, confirmPassword,"------------------------------");

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://hrb5wx2v-5002.inc1.devtunnels.ms/api/user/addUser",
        { name, email, password, confirmPassword },
        { withCredentials: true } 
      );

      console.log("✅ Signup Response:", response.data);

      if (response.data.status === "true") {
        setSuccess("Signup successful! Redirecting to login...");

        // ✅ Check if the API returns a token
        // if (response.data.data?.token) {
        //   localStorage.setItem("token", response.data.data.token);
        //   console.log("Token Stored:", localStorage.getItem("token"));

          // ✅ Automatically login if the token is provided
          // navigate("/dashboard");
        } 
       else {
        setError(response.data?.message || "Signup failed.");
      }
    } catch (err) {
      console.error("❌ Signup Error:", err);

      if (err.response) {
        setError(`Error: ${err.response.data?.message || err.response.status}`);
      } else if (err.request) {
        setError("No response from server. Please check your internet connection.");
      } else {
        setError("An unknown error occurred.");
      }
    }
  };
  

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row h-100 g-0">
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <div
            className="w-100 p-4"
            style={{
              maxWidth: "450px",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 className="mb-3 fw-bold" style={{ color: "#764ba2" }}>Create an Account</h2>
            <p className="text-muted fw-bold">Join us to create and monetize your own AI influencers</p>

            {error && <div className="alert alert-danger text-center">{error}</div>}
            {success && <div className="alert alert-success text-center">{success}</div>}

            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ borderColor: "#764ba2" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderColor: "#764ba2" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ borderColor: "#764ba2" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{ borderColor: "#764ba2" }}
                />
              </div>

              <button type="submit" className="btn w-100" style={{ background: "#764ba2", color: "#fff", border: "none" }}>
                Sign Up
              </button>
            </form>

            <div className="text-center mt-3">
              <span style={{ color: "#555" }}>
                Already have an account? <Link to="/login" style={{ color: "#764ba2" }}>Login</Link>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center" style={{ background: "rgba(118, 75, 162, 0.8)", color: "#fff" }}>
          <div className="text-center p-4">
            <h2 className="fw-bold">Design your own influencer, or chat with one</h2>
            <p className="lead">Create, chat, and more</p>
            <img
                src="https://i.ibb.co/cXVj2jK6/DALL-E-2025-03-03-11-31-36-A-futuristic-digital-interface-of-a-login-screen-designed-for-an-AI-influ.webp"
                className="img-fluid"
                alt="AI Influencer Preview"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
