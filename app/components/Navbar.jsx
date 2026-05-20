"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === "sidebar-backdrop") {
      closeSidebar();
    }
  };

  return (
    <>
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={handleBackdropClick}></div>
      )}
      <header>
        <div className="logo">
          <a href="/">
            <div className="logo-image">
              <img
                src="coffeelogo-removebg-preview.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h4 style={{ color: "#e8d7c3" }}>Coffee House</h4>
            </div>
          </a>
        </div>
        <button
          className="hamburger-menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={sidebarOpen ? "sidebar-open" : ""}>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
          <a href="/" onClick={closeSidebar}>
            <i className="fas fa-home"></i> Home
          </a>
          <a href="#discover" onClick={closeSidebar}>
            <i className="fas fa-compass"></i> Discover
          </a>
          <a href="#reviews" onClick={closeSidebar}>
            <i className="fas fa-star"></i> Reviews
          </a>
          <a href="#contact" onClick={closeSidebar}>
            <i className="fas fa-envelope"></i> Contact Us
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
