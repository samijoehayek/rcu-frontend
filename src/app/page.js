"use client";
import React from "react";
import JoinTheMetaverse from "../components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "../components/background-image/background-image";
import Image from "next/image";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <BackgroundImage imageName="desert-back" />

      {/* Content Wrapper - Full height with z-index to appear above background */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Row 2: Main Content with Two Columns - 40/60 split, image hides on medium and smaller screens */}
        <div className="flex flex-grow h-full w-full">
          {/* JoinTheMetaverse component - 40% on larger screens, 100% on medium and smaller screens */}
          <div className="w-full md:w-2/5 ml-10 mt-10 flex items-center justify-center bg-[#161515D9] border border-[#D7AD5F] ">
            <div className="py-4 px-20">
              <div className="flex items-center justify-start mb-8">
                <div>
                  <Image
                    src="/comission-logo.png"
                    alt="Commission Logo"
                    width={150} // Half of original 300
                    height={25} // Half of original 50
                  />
                </div>
                <div className="mx-8 h-10 w-px bg-[#BA9863]"></div>
                {/* Vertical separator line */}
                <div>
                  <Image
                    src="/alula-logo.png"
                    alt="Alula Logo"
                    width={60} // Half of original 120
                    height={25} // Half of original 50
                  />
                </div>
              </div>

              <JoinTheMetaverse />
            </div>
          </div>

          {/* Right side image - 60% on larger screens, hidden on medium and smaller screens */}
          <div className="hidden md:flex md:w-3/5 items-center justify-center h-full justify-center">
            <div className="relative h-5/6">
              <Image
                src="/the-immersive-dadan-exp.png"
                alt="The Immersive Dadan Experience"
                width={1148}
                height={876}
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
