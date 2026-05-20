import React from "react";

const Discover = () => {
  return (
    <section className="discover" id="discover">
      <div className="discover-image">
        <img
          src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww"
          alt="Coffee cup"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="discover-content">
        <h2>Discover Coffee House</h2>
        <p>Elevating Your Coffee Experience</p>
        <p>
          At Coffee House, we're on a mission to redefine your coffee moments.
          Our carefully curated selection of premium beans, sourced from the
          finest plantations worldwide, ensures every cup tells a story of
          excellence and passion.
        </p>
        <p>
          With expert craftsmanship and a commitment to quality, join us in
          savoring the art of coffee, one cup at a time.
        </p>
        <div style={{ margin: "20px 0", fontSize: "14px" }}>
          <p style={{ marginBottom: "10px" }}>
            <i
              className="fas fa-check-circle"
              style={{ color: "#daa76b", marginRight: "8px" }}
            ></i>
            Espresso
          </p>
          <p style={{ marginBottom: "10px" }}>
            <i
              className="fas fa-check-circle"
              style={{ color: "#daa76b", marginRight: "8px" }}
            ></i>
            Double Espresso (Doppio)
          </p>
          <p style={{ marginBottom: "10px" }}>
            <i
              className="fas fa-check-circle"
              style={{ color: "#daa76b", marginRight: "8px" }}
            ></i>
            Cappuccino
          </p>
          <p style={{ marginBottom: "10px" }}>
            <i
              className="fas fa-check-circle"
              style={{ color: "#daa76b", marginRight: "8px" }}
            ></i>
            Café au Lait
          </p>
        </div>
        <button className="btn-read-more">
          <i className="fas fa-arrow-right" style={{ marginRight: "8px" }}></i>
          Read More
        </button>
      </div>
    </section>
  );
};

export default Discover;
