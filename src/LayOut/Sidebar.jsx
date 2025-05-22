import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleSidebarClose = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu">
        {isLoggedIn ? (
          <Link
            to="/dashboard"
            className="menu-link text-white"
            onClick={handleSidebarClose}
          >
            <li className="menu-item">
              <i className="fa-solid fa-folder-open me-2"></i>
              <span className="menu-text ms-3">Dashboard</span>
            </li>
          </Link>
        ) : (
          <Link
            to="/"
            className="menu-link text-white"
            onClick={handleSidebarClose}
          >
            <li className="menu-item">
              <i className="fa-regular fa-star me-2"></i>
              <span className="menu-text ms-3">Home</span>
            </li>
          </Link>
        )}
        {/* <li className="menu-item">
          <a href="#How" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-solid fa-circle-play me-2"></i>
            <span className="menu-text ms-3">Features</span>
          </a>
        </li> */}

        <Link
          to="/explore"
          className="menu-link text-white"
          onClick={handleSidebarClose}
        >
          <li className="menu-item">
            <i className="fa-regular fa-image me-2"></i>
            <span className="menu-text ms-3">Explore</span>
          </li>
        </Link>

        <Link
          to="/Createimg"
          className="menu-link text-white"
          onClick={handleSidebarClose}
        >
          <li className="menu-item">
            <i className="fa-duotone fa-regular fa-plus me-2"></i>
            <span className="menu-text ms-3">Create Image</span>
          </li>
        </Link>

        <Link
          to="/Gallery"
          className="menu-link text-white"
          onClick={handleSidebarClose}
        >
          <li className="menu-item">
            <i className="fa-regular fa-image me-2"></i>
            <span className="menu-text ms-3">Gallery</span>
          </li>
        </Link>

        <Link
          to="/Contact"
          className="menu-link text-white"
          onClick={handleSidebarClose}
        >
          <li className="menu-item">
            <i className="fa-regular fa-user me-2"></i>
            <span className="menu-text ms-3">Contact</span>
          </li>
        </Link>

        <Link
          to="/Membership"
          className="menu-link text-white"
          onClick={handleSidebarClose}
        >
          <li className="menu-item">
            <i className="fa-solid fa-bolt me-2"></i>
            <span className="menu-text ms-3">Membership</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
