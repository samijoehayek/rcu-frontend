"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Login from "../login/login";

const JoinTheMetaverse = () => {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      document.cookie = `token=${token}`;
      router.push("/dashboard");
    }
  }, [router]);

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser"));
      }
    });
  }

  return (
    <>
      <Head>
        <title>Join Through Ancient AlUla</title>
      </Head>
      <div className="relative w-full max-w-lg">
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
          className="relative w-full h-full"
          style={{
            clipPath:
              "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
            background: "#161515",
            zIndex: 1,
            border: "1px solid #E8C27AA6",
          }}
        >
          {/* Top-left dotted triangle */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: "264px",
              height: "264px",
              backgroundImage:
                "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
              backgroundSize: "6px 6px",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              zIndex: 2,
              maskImage: "radial-gradient(circle at 0 0, black 7%, transparent 18%)",
              WebkitMaskImage: "radial-gradient(circle at 0 0, black 7%, transparent 18%)",
            }}
          />
          {/* Bottom-right dotted triangle */}
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              width: "270px",
              height: "200px",
              backgroundImage:
                "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
              backgroundSize: "6px 6px",
              clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
              zIndex: 2,
              maskImage: "radial-gradient(ellipse at 100% 100%, black 7%, transparent 22%)",
              WebkitMaskImage: "radial-gradient(circle at 100% 100%, black 7%, transparent 18%)",
            }}
          />

          <div className="relative z-10 py-20 px-10 sm:px-14">
            <div className="flex items-center justify-start mb-8">
              <Image
                src="/comission-logo.png"
                alt="Commission Logo"
                width={200}
                height={25}
              />
              <div className="mx-8 h-10 w-px bg-[#BA9863]"></div>
              <Image
                src="/alula-logo.png"
                alt="Alula Logo"
                width={60}
                height={25}
              />
            </div>
            
            <div className="mb-2">
              <h1 className="text-white text-[30px] font-bold">
                Log in to your account
              </h1>
            </div>
            <div className="mb-5">
              <p className="text-[#8A8A8A] text-[17px] font-light">
                Join the community of adventurers.
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinTheMetaverse;