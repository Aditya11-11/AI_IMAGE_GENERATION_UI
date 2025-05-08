import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
 
  const [data, setData] = useState(null);
  const [error, setError] = useState("");



const handleLogin = async (e) => {
  e.preventDefault();  // Prevent form submission
  setError("");        // Reset previous error
  setLoading(true);    // Show loading state

  try {
    // Make the login API call
    const response = await axios.post(
      "https://image-generation-production.up.railway.app/Login", // API Endpoint
      { email, password }
    );

    console.log("API Response:", response.data);

    // If login is successful and a token is returned
    if (response.data.access_token) {
      // Store Token in Local Storage
      localStorage.setItem("token", response.data.access_token);
      
      console.log("Token Stored in LocalStorage:", localStorage.getItem("token"));

      // Redirect to the desired page (dashboard in this case)
      navigate("/earlyaccess");
    } else {
      // If login fails, display the error message
      setError(response.data?.message || "Invalid credentials!");
    }
  } catch (err) {
    console.error("API Error:", err);
    setError("Login failed! Please try again.");  // Default error message
  }

  setLoading(false);  // Stop loading state after the request is finished
};


  
  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div className="row h-100 g-0">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div
            className="w-100 p-4"
            style={{
              maxWidth: "400px",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="text-center mb-4">
              <h4 className="fw-bold" style={{ color: "#764ba2" }}>
                MAKE INFLUENCER<span className="text-dark fw-bold">.ai</span>
              </h4>
            </div>
            <h5 className="mb-3 fw-bold" style={{ color: "#333" }}>Login</h5>

            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{ borderColor: "#764ba2" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{ color: "#555" }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  style={{ borderColor: "#764ba2" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <a href="#" style={{ color: "#764ba2" }}>Forgot password?</a>
              </div>
              

              <button
                type="submit"
                className="btn w-100"
                style={{ background: "#764ba2", color: "#fff", border: "none" }}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
              
            </form>

            <div className="text-center mt-3">
              <span style={{ color: "#555" }}>
                Not have an account? <Link to="/signup" style={{ color: "#764ba2" }}>Create an Account</Link>
              </span>
            </div>
            <div className="text-center my-3" style={{ color: "#555" }}>or with</div>
            <button
              type="button"
              className="btn btn-outline-secondary w-100"
              style={{ borderColor: "#764ba2", color: "#764ba2" }}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                width="20"
                className="me-2"
              />
              Sign in with Google
            </button>
          </div>
        </div>

        <div
          className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center"
          style={{ background: "rgba(118, 75, 162, 0.8)", color: "#fff" }}
        >
          <div className="text-center p-4">
            <h2 className="fw-bold mb-3">Design your own influencer, or chat with one</h2>
            <p className="lead">Create, chat, and more</p>
            <div className="rounded overflow-hidden">
              <img
                src="https://i.ibb.co/cXVj2jK6/DALL-E-2025-03-03-11-31-36-A-futuristic-digital-interface-of-a-login-screen-designed-for-an-AI-influ.webp"
                className="img-fluid"
                alt="AI Influencer Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
