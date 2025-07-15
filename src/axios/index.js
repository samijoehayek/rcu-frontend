import axios from "axios";

// auth
export const login = async (username, password) => {
  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`,
    {
      username: username,
      password: password,
    }
  );

  return user.data;
};



// This function will send the email to your backend
export const sendResetPasswordEmail = async (email) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/forgotPasswordEmail`, { email });
  return response.data;
};

export const setNewPassword = async (token, newPassword) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/forgotPassword/${token}`,
    { newPassword }
  );
  return response.data;
};