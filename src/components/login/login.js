"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { login } from "../../axios";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("Username is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await login(values.username, values.password)
          .then((response) => {
            const token = response.token;
            localStorage.setItem("token", token);
            document.cookie = `token=${token}`;
          })
          .then(() => {
            router.push("/dashboard");
          })
          .catch((error) => {
            setLoginError(true);
            if (error.response.status === 409) {
            }
            console.log("Login failed: ", error);
          });
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      style={{ marginTop: "2rem" }}
    >
      <Stack spacing={3}>
        <TextField
          error={!!(formik.touched.username && formik.errors.username) || loginError}
          name="username"
          fullWidth
          helperText={formik.touched.username && formik.errors.username}
          label="Username or Email"
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);
            setLoginError(false);
          }}
          value={formik.values.username}
          autoComplete="new-username"
          type="username"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#82807E",
              },
              "&:hover fieldset": {
                borderColor: "#82807E",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#82807E",
              },
              "&.Mui-error fieldset": {
                borderColor: "#B64034 !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#82807E",
              opacity: 1,
              "&.Mui-focused": {
                color: "#82807E",
                opacity: 1,
              },
              "&.Mui-error": {
                color: "#B64034 !important",
              },
            },
            "& .MuiInputBase-input": {
              color: "#82807E",
            },
            "& .MuiFormHelperText-root": {
              color: "#FF5A5A !important",
            },
          }}
        />
        <TextField
          error={!!(formik.touched.password && formik.errors.password) || loginError}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);
            setLoginError(false);
          }}
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          autoComplete="new-password"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#82807E",
              },
              "&:hover fieldset": {
                borderColor: "#82807E",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#82807E",
              },
              "&.Mui-error fieldset": {
                borderColor: "#B64034 !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#82807E",
              opacity: 1,
              "&.Mui-focused": {
                color: "#82807E",
                opacity: 1,
              },
              "&.Mui-error": {
                color: "#B64034 !important",
              },
            },
            "& .MuiInputBase-input": {
              color: "#82807E",
            },
            "& .MuiFormHelperText-root": {
              color: "#FF5A5A !important",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "#82807E" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#82807E" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {formik.errors.submit && (
        <Typography color="error" sx={{ mt: 3 }} variant="body2">
          {formik.errors.submit}
        </Typography>
      )}
      {loginError ? (
        <div>
          <p className={`text-red-500 text-sm mb-0 mt-3`}>Wrong credentials</p>
        </div>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onClick={() => setRememberMe(!rememberMe)}
              sx={{
                color: "#FFFFFF",
                "&.Mui-checked": {
                  color: "#30533E",
                },
              }}
            />
          }
          label={
            <Typography
              variant="body2"
              sx={{ color: "#D5D5D5", fontSize: 14, mt: "5px" }}
            >
              Keep me logged in
            </Typography>
          }
          labelPlacement="end"
          sx={{ alignItems: "flex-center", mt: "2px" }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#D5D5D5",
            cursor: "pointer",
            mt: "5px",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
          onClick={() => router.push("/forgot-password")}
        >
          Forgot password
        </Typography>
      </Box>
      <Button
        fullWidth
        size="large"
        sx={{
          mt: 3,
          mb: 3,
          borderRadius: "10px",
          background: "#D7AD5F !important",
          border: "none",
          color: "#14332D",
          width: "100%",
          maxWidth: "399px",
          height: "56px",
          boxShadow: "none",
          "&:hover": {
            background: "#D7AD5F",
          },
          "&.Mui-disabled": {
            background: "#36373E",
            color: "rgba(255, 255, 255, 0.5)",
          },
        }}
        type="submit"
        variant="contained"
        disabled={!formik.values.username || !formik.values.password}
      >
        <p
          id="join-experience-btn"
          className="mt-1 text-black font-bold"
          style={{
            fontFamily: "Geometrica, sans-serif",
            fontWeight: 1000,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}
        >
          JOIN THE EXPERIENCE
        </p>
      </Button>
    </form>
  );
};

export default Login;