import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const BlogSection = () => {
  return (
    <div className="container-flud py-4 bg-white text-black p-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Create AI Influencers &<br />Generate Revenue</h1>
        <p className="text-muted">Find out how to create ai influencers.</p>
      </div>1

      {/* Featured Posts Section */}
      <h5 className="fw-bold">Featured posts</h5>
      <div className="row mt-3">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Featured Post Card */}
          <div className="card border-0">
            <img
              src="img/blog.webp"  // Replace with actual image URL
              className="card-img-top rounded"
              alt="Featured Post"
            />
            <div className="card-body px-0">
              <p className="mb-1 text-muted">
                <strong>Ryan</strong> / Jan 26, 2025
              </p>
              <h5 className="card-title fw-bold">
                Creating Your Own AI Influencer: A Step-by-Step Guide
              </h5>
              <span className="badge bg-light text-dark">Marketing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {/* Sidebar - Tags */}
        <div className="col-12 col-md-3">
          <h4 className="fw-bold mb-3">All posts</h4>
          <div className="mb-3">
            <h6 className="text-muted">TAGS</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="btn btn-light w-100 text-start">
                  All Tags <span className="badge bg-secondary ms-2">1</span>
                </button>
              </li>
              <li>
                <button className="btn btn-link text-decoration-none">
                  Marketing
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="col-12 col-md-9">
          <div className="card mb-3 border-0">
          <div className="col">
                <img
                  src="img/blog.webp" // Replace with actual image
                  className="img-fluid rounded"
                  alt="Blog Post"
                />
              </div>
            <div className="row g-0">
              
              <div className="col-md-8">
                <div className="card-body">
                  <p className="mb-1">
                    <strong>Ryan</strong> / Jan 26, 2025
                  </p>
                  <h5 className="card-title fw-bold">
                    Creating Your Own AI Influencer: A Step-by-Step Guide
                  </h5>
                  <span className="badge bg-light text-dark">Marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-light">← Previous</button>
            <span className="badge bg-light text-dark px-3 py-2">1</span>
            <button className="btn btn-light">Next →</button>
          </div>
        </div>
      </div>
      <div className="container">

        {/* Logo */}
        <div className="mb-3">
          <img 
            src="https://via.placeholder.com/100x30" // Replace with actual logo
            alt="Logo"
            className="mb-2"
          />
        </div>

        {/* Navigation Links */}
        <nav className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="text-decoration-none text-dark">Blog Home</a>
          <a href="#" className="text-decoration-none text-dark">Explore Influencers & Chat</a>
          <a href="#" className="text-decoration-none text-dark">MakeInfluencer AI</a>
        </nav>
        

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-5 mb-3" style={{fontSize:"20px"}}>
          <a href="#" className="text-black"><i class="bi bi-instagram text-black"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-youtube text-black"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-tiktok text-black"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-rss text-black"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-person text-black"></i></a>
        </div>

        {/* Copyright */}
        <div className="text-muted">
          © 2025 MakeInfluencer.AI. All Rights Reserved.
        </div>

      </div>
    </div>
  );
};

export default BlogSection;
