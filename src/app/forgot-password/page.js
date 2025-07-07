"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendResetPasswordEmail } from "../../axios/index"; // adjust the path if needed
import './style.css';

export default function ResetPassword() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      setMessage("");
      setError("");
      try {
        await sendResetPasswordEmail(values.email);
        setMessage("If this email exists, a reset link has been sent.");
      } catch (err) {
        setError("There was a problem sending the reset link.");
      }
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/desert-back.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          zIndex: 10,
        }}
      >
        <div
          className="fixed flex flex-col items-start"
          style={{
            width: "700px",
            height: "587px",
            background: "#161515D9 ",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            clipPath:
              "polygon(16px 0px, 100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 16px)",
            boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.5)",
            border: "0.1px solid #9E8556",
            padding: 0,
            zIndex: 10,
            overflow: "visible",
            position: "fixed",
          }}
        >
          {/* Top-left gold accent */}
          <div
            style={{
              position: "absolute",
              top:-27,
              left: -9,
              width: "27px",
              height: "46px",
              background: "#E8C27A",
              zIndex: 2,
              pointerEvents: "none",
              transform: "rotate(45deg)"
            }}
          />
          {/* Bottom-right gold accent */}
          <div
            style={{
              position: "absolute",
              bottom: -18,
              right: -12,
              width: "27px",
              height: "36px",
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
              width: "100px",
              height: "60px",
              backgroundImage:
                "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.5px)",
              backgroundSize: "6px 6px",
              zIndex: 2,
              maskImage:
                "radial-gradient(ellipse at 0 0, black 7%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 0 0, black 7%, transparent 70%)",
              margin: 0,
            }}
          />

          {/* Bottom-right faded dots */}
       
              <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "100px",
                height: "60px",
                backgroundImage:
                  "radial-gradient(rgba(179, 179, 179, 0.28) 1.5px, transparent 1.0px)",
                backgroundSize: "6px 6px",
                zIndex: 2,
                maskImage:
                  "radial-gradient(ellipse at 100% 100%, black 7%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 100% 100%, black 7%, transparent 80%)",
                margin: 0,
                pointerEvents: "none",
              }}
            />

          {/* Content wrapper with padding */}
          <div className="w-full pt-8 pl-8" style={{ padding: "32px 0 0 32px" }}>
            {/* Vertical flex parent for stacking elements */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: 118, // Only here!
              }}
            >
              {/* Row of logos */}
              <div className="flex justify-start items-start mt-[28px]">
                <Image
                  src="/comission-logo.png"
                  alt="Commission Logo"
                  width={146}
                  height={30}
                />
                <div
                  className="mx-[23px] mt-[-6px] h-[44px] w-px bg-[#695C48]"
                ></div>
                <Image
                  src="/alula-logo.png"
                  alt="Alula Logo"
                  width={45}
                  height={25}
                />
              </div>
              {/* Back to log in link with arrow */}
              <div
                className="flex items-center cursor-pointer mt-[17.8px]"
              >
                <Image
                  src="/icon_chevron-left.svg"
                  alt="Back Arrow"
                  width={24}
                  height={24}
                  className="mr-2 ml-[-5px]"
                />
                <span className="text-white text-[12px]">
                  Back to log in
                </span>
              </div>

              {/* Reset Password Section */}
              <h2
                className="text-white text-2xl font-[Geometrica] text-[28px]"
                style={{ margin: 0, marginBottom: -3 , marginTop:37}}
              >
                Reset Password
              </h2>
              <p
                className="text-base mb-[43px] font-[Geometrica] text-[#8A8A8A] mt-2 mb-11 text-[16px]"
                style={{ margin: "8px 0 43px 0" }}
              >
                Enter your email to change your password
              </p>
              
              {/* Formik Form */}
              <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-[398px] h-[62px] px-3 py-2 rounded-md border text-base font-[Geometrica] bg-[#232323] text-white outline-none ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : 'border-gray-500'
                    }`}
                    style={{ 
                      border: formik.touched.email && formik.errors.email 
                        ? "1px solid #FF5A5A" 
                        : "1px solid #666"
                    }}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div 
                      style={{ 
                        color: "#FF5A5A", 
                        fontSize: "14px", 
                        marginTop: "8px",
                        fontFamily: "Geometrica, sans-serif"
                      }}
                    >
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="rounded-xl border-none font-bold text-base font-[Geometrica] w-[398px] h-[62px] cursor-pointer px-6 py-2"
                  style={{
                    background: "#D7AD5F",
                    color: "#1d1d1d",
                    marginTop: formik.touched.email && formik.errors.email ? "16px" : "39px"
                  }}
                >
                  Reset Password
                </button>
              </form>
              
              {message && <div style={{ color: "green", marginTop: 10 }}>{message}</div>}
              {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
              {/* Add more vertically stacked elements here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
