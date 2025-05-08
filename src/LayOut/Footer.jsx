import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/earlyaccess" className="footer-link text-center">
        <i className="fa-regular fa-star"></i>
      </Link>
      <Link to="/page2" className="footer-link">
        <i className="fa-solid fa-circle-play"></i>
      </Link>
      <Link to="/page3" className="footer-link">
        <i className="fa-regular fa-image"></i>
      </Link>
      <Link to="/page4" className="footer-link">
        <i className="fa-solid fa-bolt "></i>
      </Link>
    </div>
  );
}

export default Footer;
