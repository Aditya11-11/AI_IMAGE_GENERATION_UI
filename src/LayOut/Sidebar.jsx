import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleSidebarClose = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/earlyaccess" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-regular fa-star me-2"></i>
            <span className="menu-text ms-3">Home</span>
          </Link>
        </li>
        <li className="menu-item">
          <a href="#How" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-solid fa-circle-play me-2"></i>
            <span className="menu-text ms-3">Features</span>
          </a>
        </li>
        <li className="menu-item">
          <Link to="/explore" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-regular fa-image me-2"></i>
            <span className="menu-text ms-3">Explore</span>
          </Link>
        </li>
        {/* <li className="menu-item">
          <Link to="/Blog" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-solid fa-folder-open me-2"></i>
            <span className="menu-text ms-3">Blog</span>
          </Link>
        </li> */}
        <li className="menu-item">
          <Link to="/Createimg" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-duotone fa-regular fa-plus me-2"></i>
            <span className="menu-text ms-3">Create Image</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Gallery" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-regular fa-image me-2"></i>
            <span className="menu-text ms-3">Gallery</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Contact" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-regular fa-user me-2"></i>
            <span className="menu-text ms-3">Contact</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Membership" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-solid fa-bolt me-2"></i>
            <span className="menu-text ms-3">Membership</span>
          </Link>
        </li>
          <li className="menu-item">
          <Link to="/dashboard" className="menu-link text-white" onClick={handleSidebarClose}>
            <i className="fa-solid fa-folder-open me-2"></i>
            <span className="menu-text ms-3">Dashboard</span>
          </Link>
        </li> 
      </ul>
    </div>
  );
}

export default Sidebar;
