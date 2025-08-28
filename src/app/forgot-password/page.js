"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendResetPasswordEmail } from "../../axios/index"; 


export default function ResetPassword() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setMessage("");
      setError("");
      try {
        await sendResetPasswordEmail(values.email);
        setMessage("If this email exists, a reset link has been sent.");
        resetForm();
      } catch (err) {
        setError("There was a problem sending the reset link.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url('/desert-back.jpg')", // Ensure this path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0,
        // Using flex to center the box vertically and horizontally
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem', // Added padding for small screens
      }}
    >
      {/* Main content box with responsive width and preserved style */}
      <div
        className="relative w-full max-w-[700px] bg-[#161515D9] border border-[#9E8556] shadow-2xl"
        style={{
          minHeight: "587px", // Use min-height to allow content to expand
          clipPath:
            "polygon(16px 0px, 100% 0px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0px 100%, 0px 16px)",
        }}
      >
        {/* Decorative elements remain the same */}
        <div
          style={{
            position: "absolute",
            top: -27,
            left: -9,
            width: "27px",
            height: "46px",
            background: "#E8C27A",
            zIndex: 2,
            pointerEvents: "none",
            transform: "rotate(45deg)",
          }}
        />
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
          }}
        />
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
            pointerEvents: "none",
          }}
        />

        {/* Content wrapper with responsive padding and alignment */}
        <div className="w-full h-full flex flex-col items-center p-6 sm:p-8">
          {/* Logos with increased size */}
          <div className="flex flex-wrap justify-center items-center mt-7 mb-4 gap-6">
            <Image
              src="/comission-logo.png" // Ensure this path is correct
              alt="Commission Logo"
              width={160} // Increased size
              height={33}
            />
            <div className="mx-2 h-11 w-px bg-[#695C48]"></div>
            <Image
              src="/alula-logo.png" // Ensure this path is correct
              alt="Alula Logo"
              width={50} // Increased size
              height={28}
            />
          </div>
          
          {/* Back to log in link */}
          <a href="/login" className="flex items-center cursor-pointer text-white text-xs self-start md:self-center mb-4 ml-4 md:ml-[-150px]">
            <Image
              src="/icon_chevron-left.svg" // Ensure this path is correct
              alt="Back Arrow"
              width={24}
              height={24}
              className="mr-2"
            />
            Back to log in
          </a>

          {/* Reset Password Section with responsive width */}
          <div className="w-full max-w-md text-center sm:text-left mt-5 px-4 sm:px-0">
            <h2
              className="text-white text-2xl font-[Geometrica]"
              style={{ margin: 0, marginBottom: -3 }}
            >
              Reset Password
            </h2>
            <p
              className="text-base font-[Geometrica] text-[#8A8A8A] mt-2 mb-11"
            >
              Enter your email to change your password
            </p>

            {/* Formik Form */}
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[62px] px-3 py-2 rounded-md text-base font-[Geometrica] bg-[#232323] text-white outline-none"
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
                      fontFamily: "Geometrica, sans-serif",
                      textAlign: 'left'
                    }}
                  >
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="rounded-xl border-none font-bold text-base font-[Geometrica] w-full h-[62px] cursor-pointer px-6 py-2 transition-colors duration-300"
                style={{
                  background: (!formik.isValid || formik.isSubmitting) ? '#36373E' : '#D7AD5F',
                  color: (!formik.isValid || formik.isSubmitting) ? 'rgba(255, 255, 255, 0.5)' : '#1d1d1d',
                }}
              >
                {formik.isSubmitting ? 'Sending...' : 'Reset Password'}
              </button>
            </form>

            {/* API Messages */}
            <div className="h-6 mt-4 text-center">
                {message && <div style={{ color: "green" }}>{message}</div>}
                {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
