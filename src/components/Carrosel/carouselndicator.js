import React from "react";

import "./carousel.css";

const CarouselIndicator = ({ slides, currentIndex }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item${
            currentIndex === index ? " active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
