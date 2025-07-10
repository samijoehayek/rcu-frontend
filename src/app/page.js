"use client";
import React from "react";
import JoinTheMetaverse from "../components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "../components/background-image/background-image";
import Image from "next/image";
import ImageSlider from "../components/image-slider/image-slider"; // We'll create this component

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1A1B22] overflow-hidden">
      <BackgroundImage imageName="rcu-login-bg" />

      {/* Content Wrapper - Full height with z-index to appear above background */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Single row with two columns */}
        <div className="flex flex-grow">
          {/* Left column - Form (35%) */}
          <div className="w-full md:w-[35%] flex items-center justify-center p-8">
            <JoinTheMetaverse />
          </div>

          {/* Right column - Image slider (65%) */}
          <div className="hidden md:flex md:w-[65%] items-center justify-center h-full">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;