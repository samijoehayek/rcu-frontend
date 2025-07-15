"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setNewPassword } from "../../axios/index";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const searchParams = useSearchParams();
  const token = searchParams.get("verificationString");

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

  // Formik setup
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(7, "Password must be at least 7 characters long.")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
        .matches(/[0-9]/, "Password must contain at least one number.")
        .required("New password is required."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords do not match.")
        .required("Please confirm your password."),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      setError("");
      setMessage("");
      try {
        await setNewPassword(token, values.newPassword);
        setMessage("Password changed successfully!");
      } catch (err) {
        setError("There was a problem setting your new password.");
      } finally {
        setSubmitting(false);
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

              <h2
                className="text-white text-2xl font-[Geometrica] text-[28px]"
                style={{ margin: 0, marginBottom: -3 , marginTop:37}}
              >
Create a new password

                
              </h2>
              <p
                className="text-base mb-[43px] font-[Geometrica] text-[#8A8A8A] mt-2 mb-11 text-[16px]"
                style={{ margin: "8px 0 43px 0" }}
              >
                 Secure your account.
                 </p>
              {/* Formik Form */}
              <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`px-3 py-2 rounded-md border text-base font-[Geometrica] text-white outline-none ${
                      formik.submitCount > 0 && formik.errors.newPassword ? "border-red-500" : "border-gray-500"
                    }`}
                    style={{
                      border: formik.submitCount > 0 && formik.errors.newPassword ? "1px solid #FF5A5A" : "1px solid #D5D5D5",
                      background: "#161515D9",
                      width: "399px",
                      height: "56px",
                    }}
                  />
                  {formik.submitCount > 0 && formik.errors.newPassword && (
                    <div style={{ color: "#FF5A5A", fontSize: "14px", marginTop: "8px", fontFamily: "Geometrica, sans-serif" }}>
                      {formik.errors.newPassword}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`px-3 py-2 rounded-md border text-base font-[Geometrica] text-white outline-none ${
                      formik.submitCount > 0 && formik.errors.confirmPassword ? "border-red-500" : "border-gray-500"
                    }`}
                    style={{
                      border: formik.submitCount > 0 && formik.errors.confirmPassword ? "1px solid #FF5A5A" : "1px solid #D5D5D5",
                      background: "#161515D9",
                      width: "399px",
                      height: "56px",
                    }}
                  />
                  {formik.submitCount > 0 && formik.errors.confirmPassword && (
                    <div style={{ color: "#FF5A5A", fontSize: "14px", marginTop: "8px", fontFamily: "Geometrica, sans-serif" }}>
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="rounded-xl border-none font-bold text-base font-[Geometrica] w-[398px] h-[62px] px-6 py-2 cursor-pointer"
                  style={{
                    background: "#D7AD5F",
                    color: "#1d1d1d",
                    marginTop: "28px",
                  }}
                >
                  Create New Password
                </button>
              </form>
              {/* Feedback messages */}
              {error && (
                <div style={{ color: "red", marginTop: 10 }}>{error}</div>
              )}
              {message && (
                <div style={{ color: "green", marginTop: 10 }}>{message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
