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

        // await auth.signIn(values.username, values.password);
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
      style={{ marginTop: '2rem' }} // Added more space at the top
    >
      <Stack spacing={3}>
        <TextField
          error={!!(formik.touched.username && formik.errors.username)}
          name="username"
          fullWidth
          helperText={formik.touched.username && formik.errors.username}
          label="Username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          autoComplete="new-username"
          type="username"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0, // Square corners
              "& fieldset": {
                borderColor: "#82807E", // Changed border color
              },
              "&:hover fieldset": {
                borderColor: "#82807E", // Same color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#82807E", // Same color when focused
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF5A5A !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#82807E", // Changed label color
              opacity: 1,
              "&.Mui-focused": {
                color: "#82807E", // Same color when focused
                opacity: 1,
              },
            },
            "& .MuiInputBase-input": {
              color: "#82807E", // Changed input text color
            },
            "& .MuiFormHelperText-root": {
              color: "#FF5A5A !important",
            },
          }}
        />
        <TextField
          error={!!(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          autoComplete="new-password"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0, // Square corners
              "& fieldset": {
                borderColor: "#82807E", // Changed border color
              },
              "&:hover fieldset": {
                borderColor: "#82807E", // Same color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#82807E", // Same color when focused
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF5A5A !important",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#82807E", // Changed label color
              opacity: 1,
              "&.Mui-focused": {
                color: "#82807E", // Same color when focused
                opacity: 1,
              },
            },
            "& .MuiInputBase-input": {
              color: "#82807E", // Changed input text color
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
                    <VisibilityIcon sx={{ color: "#82807E" }} /> // Changed icon color
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#82807E" }} /> // Changed icon color
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
                color: "#30533E", // Changed checkbox color
                "&.Mui-checked": {
                  color: "#30533E", // Changed checked color
                },
              }}
            />
          }
          label={
            <Typography
              variant="body2"
              sx={{ color: "#30533E", fontSize: 14, mt: "5px" }} // Changed text color
            >
              Remember me
            </Typography>
          }
          labelPlacement="end"
          sx={{ alignItems: "flex-center", mt: "2px" }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#14332D", cursor: "pointer", mt: "5px" }} // Changed forgot password color
          onClick={() => router.push("/forgot-password-email")}
        >
          Forgot password?
        </Typography>
      </Box>
      <Button
        fullWidth
        size="large"
        sx={{
          mt: 3,
          mb: 3,
          borderRadius: 0, // No border radius
          background: "#14332D !important", // Changed button background color
          border: "2px solid #D6BFA3", // Added border with specified color
          color: "#DDCBB1", // Changed text color
          "&:hover": {
            background: "#14332D", // Same color on hover
          },
          boxShadow: "none", // Removed shadow
          "&.Mui-disabled": {
            background: "#36373E",
            color: "rgba(255, 255, 255, 0.5)",
          },
        }}
        type="submit"
        variant="contained"
        disabled={!formik.values.username || !formik.values.password}
      >
        <p className="mt-1">JOIN THE EXPERIENCE</p> {/* Changed button text */}
      </Button>
    </form>
  );
};

export default Login;