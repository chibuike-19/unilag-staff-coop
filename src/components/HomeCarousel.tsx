

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

interface CarouselProps {
  images: {
    bgImg: string;
    text: string;
    mobileImg?: string
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(changeImage);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[34rem] md:h-[39rem] transition-transform duration-1000 ease-in-out">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full text-white place-content-center ${
            currentIndex === index ? "translate-x-0" : ""
          } leading-[156px] bg-no-repeat tracking-wide text-[10rem]  font-bold h-full ${image.mobileImg ? `lg:${image.mobileImg} ${image.bgImg}` : `${image.bgImg}`} bg-cover`}
          style={{ display: currentIndex == index ? "grid" : "none" }}
        >
          <p className="drop-shadow-2xl">{image.text}</p>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 w-16 h-16 bg-gray-800 text-white rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 w-16 h-16 bg-gray-800 text-white rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${
              index === currentIndex ? "bg-theme-color" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;