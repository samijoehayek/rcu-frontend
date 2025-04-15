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