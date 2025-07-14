"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = ["/slider3.png", "/slider2.png", "/slider1.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This hook sets up the 5-second timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 milliseconds = 5 seconds

    // This cleanup function will run when the component is unmounted
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-14">
      {/* The image container now holds all images for the cross-fade effect */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slider image ${index + 1}`}
            fill
            className={`
              absolute transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ objectFit: 'contain' }}
            priority={index === 0} // Prioritize loading the first image
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;