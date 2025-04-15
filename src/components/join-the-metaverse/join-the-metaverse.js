"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Login from "../login/login";

const JoinTheMetaverse = () => {
  const router = useRouter();

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      document.cookie = `token=${token}`;
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Head>Join Through Ancient AlUla</Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            pb: 20,
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                className={`text-[#14332D] text-[44px] font-bold font-weight-900 flex items-center`}
              >
                Journey Through Ancient AlUla
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ mb: 5 }}>
              <Typography
                className={`text-[#14332D] text-[24px] font-light flex items-center`}
              >
                Explore the Virtual AlUla Heritage Experience!
              </Typography>
            </Stack>
            <Login />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default JoinTheMetaverse;
