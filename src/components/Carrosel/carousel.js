import CarouselItem from "./carouselItem";

import { useState, useEffect, useRef } from "react";

import "./carousel.css";

import CarouselControls from "./carouselControls";
import CarouselIndicator from "./carouselndicator";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  // Passando automático
  //   useEffect(() => {
  //     const slideInterval = setInterval(() => {
  //       setCurrentSlide((currentSlide) =>
  //         currentSlide < slides.length - 1 ? currentSlide + 1 : 0
  //       );
  //     }, 3000);

  //     return () => clearInterval(slideInterval);
  //   }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      <CarouselIndicator
        slides={slides}
        currentIndex={currentSlide}
        switchIndex={switchIndex}
      />
      <CarouselControls prev={prev} next={next} />
    </div>
  );
};

export default Carousel;
