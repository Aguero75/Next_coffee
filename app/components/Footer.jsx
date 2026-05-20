"use client";

import React, { useState } from "react";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    // Reset form
    e.target.reset();
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {showToast && (
        <div className="toast">
          <i className="fas fa-check-circle"></i>
          <span>Thank you for contacting Coffee House</span>
        </div>
      )}
      <footer id="contact">
        <div className="footer-section">
          <h3>
            <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
            Contact Us
          </h3>
          <p>Send us a message</p>
          <form className="footer-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>

        <div className="footer-section sitemap">
          <h3>
            <i className="fas fa-map" style={{ marginRight: "8px" }}></i>Sitemap
          </h3>
          <p>All our pages</p>
          <a href="/">
            <i className="fas fa-angle-right"></i> Home
          </a>
          <a href="#discover">
            <i className="fas fa-angle-right"></i> Discover
          </a>
          <a href="#reviews">
            <i className="fas fa-angle-right"></i> Reviews
          </a>
          <a href="#contact">
            <i className="fas fa-angle-right"></i> Contact Us
          </a>
        </div>

        <div className="footer-info">
          <div className="logo-footer">
            <img
              src="coffeelogo-removebg-preview.png"
              alt="Coffee House Logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h4 style={{ color: "#e8d7c3" }}>Coffee House</h4>
          </div>
          <div className="contact-info">
            <p>
              <i
                className="fas fa-phone"
                style={{ color: "#daa76b", marginRight: "10px" }}
              ></i>
              <a href="tel:+234084002000">034 400 2000</a>
            </p>
            <p>
              <i
                className="fas fa-envelope"
                style={{ color: "#daa76b", marginRight: "10px" }}
              ></i>
              <a href="mailto:coffeeborcelle@gmail.com">
                coffeeborcelle@gmail.com
              </a>
            </p>
            <p>
              <i
                className="fas fa-map-marker"
                style={{ color: "#daa76b", marginRight: "10px" }}
              ></i>
              <span
                style={{
                  fontStyle: "normal",
                  color: "#daa76b",
                  display: "inline",
                }}
              >
                123 Coffee Street, Java City, Indonesia
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
