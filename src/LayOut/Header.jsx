import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ toggleSidebar }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/earlyaccess");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="toggle-button" style={{ marginLeft: "10px" }}>
        ☰
      </button>

      <div className="user-info">
        {isLoggedIn ? (
       <div className="profile-section" style={{ position: "relative" }}>
  <h5>Welcome, {name}!</h5>
  
  {/* Dropdown Toggle */}
  <button
  
    className="dropdown-toggle"
    style={{
      background: "black",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      marginLeft: "10px",
    }}   onClick={handleLogout}
  >
   Logout
  </button>
</div>

        ) : (
          <>
            <Link to="/login">
              <button
                className="logout-button"
                style={{ marginRight: "10px", background: "black", height: "30px", color: "white" }}
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="logout-button fw-bold"
                style={{ marginRight: "10px", background: "white", color: "black", height: "30px" }}
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
