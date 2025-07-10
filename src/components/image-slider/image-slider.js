"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/slider1.png",
    "/slider2.png", // Add your other image paths here
    "/slider3.png", // Add your other image paths here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {/* Main Image */}
      <div className="relative h-5/6 w-full">
        <Image
          src={images[currentImageIndex]}
          alt="Slider Image"
          width={900}
          height={700}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;