import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure you have this CSS file for styling

function Header({ toggleSidebar }) {
  // State to manage user's login status and name
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  // Get user info from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedToken = localStorage.getItem("token");

    if (storedName && storedToken) {
      setName(storedName);
      setIsLoggedIn(true); // User is logged in if token is available
    }
  }, []);

  // Handle logout by clearing the localStorage and updating state
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setName("");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="toggle-button" style={{ marginLeft: "10px" }}>
        ☰
      </button>

      {/* Conditional Rendering based on login state */}
      <div className="user-info">
        {isLoggedIn ? (
          // Display profile section if the user is logged in
          <div className="profile-section" style={{ position: "relative" }}>
            <h5>Welcome, {name}!</h5>

            {/* Profile Dropdown */}
            <div className="dropdown" style={{ position: "absolute", top: "30px", right: "10px" }}>
              <button
                className="dropdown-toggle"
                style={{
                  background: "black",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                {name}
              </button>
              <div
                className="dropdown-menu"
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "0",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Display login buttons if the user is not logged in
          <>
            <Link to="/login">
              <button className="logout-button" style={{ marginRight: "10px", background: "black", height: "30px" }}>
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="logout-button fw-bold" style={{ marginRight: "10px", background: "white", color: "black" }}>
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
