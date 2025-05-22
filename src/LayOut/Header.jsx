import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";

function Header({ toggleSidebar }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [token, setToken] = useState(null); // State to store the token
  const user_id = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
  const navigate = useNavigate();

  // Check login status and set name when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("user_name");

    if (token) {
      setIsLoggedIn(true);
      setName(userName);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Fetch the token based on user_id
  const fetchToken = async () => {
    if (!user_id) {
      console.error("user_id is missing");
      return;
    }

    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    console.log("Token:", token); // Log the token to check if it's available
    if (!token) {
      console.error("Token is missing. Please log in.");
      alert("Please log in to continue.");
      return; // Exit early if token is missing
    }

    try {
      const response = await axios.get(
        "https://image-generation-production.up.railway.app/get_tokens",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming token is in localStorage
          },
          params: {
            user_id: user_id, // Send user_id as a query parameter
          },
        }
      );
      console.log(response);
      const fetchedToken = response.data.token_count; // Assuming the response contains a `token`
      console.log("token", fetchedToken);
      setToken(fetchedToken); // Store the token in the state
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  // Fetch the token when the component mounts
  useEffect(() => {
    fetchToken();
  }, [user_id]); // Fetch the token when `user_id` changes

  // Handle logout
 const handleLogout = () => {
  localStorage.clear();
  setToken(null); // Clear token from state
  setIsLoggedIn(false);
  navigate("/");
};

  return (
    <nav className="navbar">
      <button
        onClick={toggleSidebar}
        className="toggle-button"
        style={{ marginLeft: "10px" }}
      >
        ☰
      </button>

    <div className="user-info">
  {/* ✅ Show token only if logged in and token exists */}
  {isLoggedIn && token && (
    <div className="me-3 d-flex align-items-center">
      <i className="fa-solid fa-coins text-warning me-2"></i>
      <span className="text-white">{token}</span>
    </div>
  )}

 {isLoggedIn ? (
  <div className="dropdown profile-section">
    {/* Profile Image */}
    <img
      src="/user-placeholder.png" // Replace with dynamic user image if available
      alt="User"
      className="rounded-circle"
      width="40"
      height="40"
      style={{ cursor: "pointer" }}
      onClick={() => setDropdownOpen(!dropdownOpen)}
    />

    {/* Dropdown Content */}
    {dropdownOpen && (
      <div
        className="dropdown-menu show mt-2"
        style={{
          right: 0,
          left: "auto",
          minWidth: "200px",
          backgroundColor: "#222",
          border: "1px solid #444",
          borderRadius: "6px",
          padding: "10px",
          color: "white",
          position: "absolute",
          top: "100%",
          zIndex: 999,
        }}
      >
        <div className="mb-2">
          <strong>Welcome,</strong>
          <div>{name}</div>
        </div>
        <hr style={{ borderColor: "#555" }} />
        <button
          className="btn btn-danger btn-sm w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
    <>
      <Link to="/login">
        <button
          className="logout-button"
          style={{
            marginRight: "10px",
            background: "black",
           
            color: "white",
          }}
        >
          Sign In
        </button>
      </Link>
      <Link to="/signup">
        <button
          className="logout-button fw-bold"
          style={{
            marginRight: "10px",
            background: "white",
            color: "black",
           
          }}
        >
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
