"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useSnackbarStore } from "../../app/stores/snackbarStore"; // Adjust path if needed

const UpdatedPasswordSnackbar = () => {
  // Subscribe to the store's state and actions
  const { isOpen, message, hideSnackbar } = useSnackbarStore();

  // Effect to automatically hide the snackbar after a delay
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, hideSnackbar]);

  // If the snackbar is not open, render nothing
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-md animate-fade-in-down"
      role="alert"
    >
      {/* Main container with relative positioning for decorative elements */}
      <div
        className="relative bg-[#161515D9] border border-[#9E8556] shadow-2xl rounded-tr-lg rounded-bl-lg"
        style={{
          // This clip-path creates the cut-corner effect on top-left and bottom-right
          clipPath:
            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
        }}
      >
        {/* Top-left gold accent */}
        <div
          style={{
            position: "absolute",
            top: -19,
            left: -7,
            width: "20px",
            height: "34px",
            background: "#E8C27A",
            zIndex: 2,
            pointerEvents: "none",
            transform: "rotate(45deg)",
          }}
        />
        {/* Bottom-right gold accent */}
        <div
          style={{
            position: "absolute",
            bottom: -13,
            right: -8,
            width: "20px",
            height: "26px",
            background: "#E8C27A",
            zIndex: 2,
            pointerEvents: "none",
            transform: "rotate(45deg)",
          }}
        />
        {/* Top-left faded dots */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: "80px",
            height: "50px",
            backgroundImage:
              "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
            backgroundSize: "6px 6px",
            zIndex: 1,
            maskImage:
              "radial-gradient(ellipse at 0 0, black 7%, transparent 70%)",
          }}
        />
        {/* Bottom-right faded dots */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none"
          style={{
            width: "80px",
            height: "50px",
            backgroundImage:
              "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.0px)",
            backgroundSize: "6px 6px",
            zIndex: 1,
            maskImage:
              "radial-gradient(ellipse at 100% 100%, black 7%, transparent 80%)",
          }}
        />

        {/* Flex container for the actual content (icon, text, and close button) */}
        <div className="flex items-center justify-between w-full h-full px-6 py-4">
          {/* Left side content: icon and text */}
          <div className="flex items-center">
            <Image
              width={23}
              height={23}
              alt="Success Checkmark"
              src="/checkicon1.svg"
              className="mr-4 flex-shrink-0"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/23x23/E8C27A/161515?text=✓";
              }}
            />
            <p className="text-white text-base font-[Geometrica]">
              {message || "Your password has been updated"}
            </p>
          </div>

          {/* Right side content: close button */}
          <button
            onClick={hideSnackbar}
            aria-label="Close notification"
            className="p-1 text-gray-400 rounded-full hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatedPasswordSnackbar;
