"use client";
import React from "react";
import JoinTheMetaverse from "../components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "../components/background-image/background-image";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1A1B22] overflow-hidden">
      <BackgroundImage imageName="rcu-login-bg" />

      {/* Content Wrapper - Full height with z-index to appear above background */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Row 1: Logo Section */}
        <div className="py-10 px-20">
          <div className="flex items-center justify-start">
            <div>
              <Image
                src="/comission-logo.png"
                alt="Commission Logo"
                width={300}
                height={50}
              />
            </div>
            <div className="mx-10 h-12 w-px bg-[#BA9863]"></div>{" "}
            {/* Vertical separator line */}
            <div>
              <Image
                src="/alula-logo.png"
                alt="Alula Logo"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Main Content with Two Columns - 40/60 split, image hides on medium and smaller screens */}
        <div className="flex flex-grow">
          {/* JoinTheMetaverse component - 40% on larger screens, 100% on medium and smaller screens */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <JoinTheMetaverse />
          </div>

          {/* Right side image - 60% on larger screens, hidden on medium and smaller screens */}
          <div className="hidden md:flex md:w-3/5 items-center justify-center h-full">
            <div className="relative h-5/6">
              <Image
                src="/home-img1.png"
                alt="Home Image"
                width={900}
                height={700}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
