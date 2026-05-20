import React from "react";

const Review = () => {
  return (
    <section className="reviews" id="reviews">
      <h2>
        <i className="fas fa-coffee" style={{ fontSize: "36px" }}></i> Reviews
      </h2>
      <p>What other people are saying!</p>
      <div className="reviews-container">
        <div className="review-card">
          <div
            style={{ color: "#daa76b", fontSize: "16px", marginBottom: "8px" }}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            "Indulge in the sublime experience of Coffee House, where every sip
            is a journey to flavor paradise. Crafted with passion, our
            exceptional blends ignite the senses and awaken the spirit."
          </p>
          <p className="review-author">
            <i
              className="fas fa-user-circle"
              style={{ marginRight: "6px" }}
            ></i>
            @afeelsoeak
          </p>
        </div>
        <div className="review-card">
          <div
            style={{ color: "#daa76b", fontSize: "16px", marginBottom: "8px" }}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            "Discover a world of taste with Coffee House. Each cup is a
            masterpiece, blending aromas and flavors that dance on your palate,
            join us in celebrating the rich heritage of exceptional coffee."
          </p>
          <p className="review-author">
            <i
              className="fas fa-user-circle"
              style={{ marginRight: "6px" }}
            ></i>
            @JiffBasss
          </p>
        </div>
        <div className="review-card">
          <div
            style={{ color: "#daa76b", fontSize: "16px", marginBottom: "8px" }}
          >
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            "Welcome to the heart and soul of coffee passion - Coffee House. Our
            carefully curated beans are on a delightful harmonizing, brewing a
            story of bold flavors and unmatched quality."
          </p>
          <p className="review-author">
            <i
              className="fas fa-user-circle"
              style={{ marginRight: "6px" }}
            ></i>
            @deekdeed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
