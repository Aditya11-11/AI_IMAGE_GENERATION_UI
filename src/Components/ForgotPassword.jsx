import React, { useState } from 'react'
import axios from "axios";

function ForgotPassword() {
    const [showPasswordModal, setShowPasswordModal] = useState(false); // For controlling modal visibility
  const [email, setEmail] = useState(""); // Email field
  const [newPassword, setNewPassword] = useState(""); // New password field
  const [name, setName] = useState(""); // Name field (optional, based on your API)
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages
  const [successMessage, setSuccessMessage] = useState(""); // To show success messages

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

    try {
      const response = await axios.post(
        "https://image-generation-production.up.railway.app/password_change",
        payload
      );

      if (response.data && response.data.success) {
        setSuccessMessage("Password changed successfully.");
        setErrorMessage(""); // Clear error message if success
      } else {
        setErrorMessage("Failed to change password. Please try again.");
        setSuccessMessage(""); // Clear success message if error
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage(""); // Clear success message on error
    }
  };
  return (
    <>
      <div className="container">
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
    </>
  )
}

export default ForgotPassword
