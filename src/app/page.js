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
          <div className="relative w-full md:w-2/5 ml-10 mt-10 flex items-center justify-center ">
            {/* Border layer */}
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
                background: "#D7AD5F",
                zIndex: 0,
              }}
            />
            {/* Content layer */}
            <div
              className="relative flex items-center justify-center w-full h-full"
              style={{
                clipPath:
                  "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                background: "#161515",
                zIndex: 1,
              }}
            >
              {/* Top-left dotted triangle with less white and more spread dots */}
              <div
                className="absolute top-0 left-0 pointer-events-none"
                style={{
                  width: "264px",
                  height: "264px",
                  backgroundImage:
                    "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
                  backgroundSize: "6px 6px", // more spread out
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  zIndex: 2,
                  maskImage:
                    "radial-gradient(circle at 0 0, black 7%, transparent 18%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 0 0, black 7%, transparent 18%)",
                }}
              />
              {/* Bottom-right dotted triangle with less white and more spread dots */}
              <div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                  width: "270px",
                  height: "200px",
                  backgroundImage:
                    "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
                  backgroundSize: "6px 6px", // more spread out
                  clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                  zIndex: 2,
                  maskImage:
                    "radial-gradient(ellipse at 100% 100%, black 7%, transparent 22%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 100% 100%, black 7%, transparent 18%)",
                }}
              />

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
