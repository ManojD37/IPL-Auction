const axios = require("axios");

const url =
  process.env.NODE_ENV === "production"
    ? "https://surapettai-ipl-auction.onrender.com/"
    : "http://localhost:8000/";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: url,
});

export default axiosInstance;
