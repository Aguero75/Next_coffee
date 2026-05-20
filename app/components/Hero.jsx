import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Coffee Makes Mood</h1>
        <p>"Indulge in Every Sip: Experience the Richness of Coffee"</p>
        <button type="submit" className="btn-submit">
          <i className="fas fa-book" style={{ marginRight: "8px" }}></i>
          <a
            href="#discover"
            style={{ textDecoration: "none", color: "#3d2f1e" }}
          >
            See Menu
          </a>
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1554600740-951beab4712b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
