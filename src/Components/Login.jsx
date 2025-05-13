import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
   const [newPassword, setNewPassword] = useState(""); // New password field
  const [name, setName] = useState(""); // Name field (optional, based on your API)
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages
  const [successMessage, setSuccessMessage] = useState(""); // To show success messages
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  // const navigate = useNavigate();
 
  const [data, setData] = useState(null);
  const [error, setError] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await axios.post(
        "https://image-generation-production.up.railway.app/Login",
        { email, password }
      );
  
      console.log("API Response:", response.data);
  
      if (response.data?.access_token) {
        // Store user_id and token in localStorage
        localStorage.setItem("token", response.data.access_token); // Save token
        localStorage.setItem("user_id", response.data.user_id); // Save user_id
        localStorage.setItem("user_name", response.data.user_name); // Save user_name if required
  
        console.log("Token Stored:", localStorage.getItem("token"));
        console.log("User ID Stored:", localStorage.getItem("user_id"));
  
        // Redirect to the next page after successful login
        navigate("/dashboard");
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Login failed!");
    }
    setLoading(false);
  };

 const handleForgotPasswordClick = () => {
    setShowPasswordModal(true); // Show modal when the link is clicked
  };

  const handlePasswordChange = async () => {
    if (!email || !newPassword || !name) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Prepare payload for password change
    const payload = {
      email: email,
      new_password: newPassword,
      name: name,
    };
     // Retrieve token from localStorage
    const token = localStorage.getItem("token");
    console.log("Tokendata:", token); // Log the token to check if it's available

    if (!token) {
      console.error("Authorization token is missing");
      alert("You need to be logged in to perform this action.");
      return; // Exit early if token is missing
    }

    try {
      const response = await axios.put(
        "https://image-generation-production.up.railway.app/password_change",
        payload,{
           headers: {
          Authorization: `Bearer ${token}`,  // Pass the token as Authorization header
        },
        }
      );

      if (response.data && response.data.success) {
        setSuccessMessage("Failed to change password. Please try again.");
        setErrorMessage(""); // Clear error message if success
      } else {
        setErrorMessage("Password changed successfully.");
        setSuccessMessage(""); // Clear success message if error
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage(""); // Clear success message on error
    }
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
                <a href="#" style={{ color: "#764ba2" }} onClick={handleForgotPasswordClick}>Forgot password?</a>
              </div>
               {/* Modal for changing password */}
      {showPasswordModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Change Password</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowPasswordModal(false)} // Close modal
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form for password change */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowPasswordModal(false)} // Close modal without action
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePasswordChange} // Trigger password change on submit
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
