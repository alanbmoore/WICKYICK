/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "build",
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_URL: process.env.REACT_APP_URL,
    REACT_APP_GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
    REACT_APP_GG_APP_ID: process.env.REACT_APP_GG_APP_ID,
    REACT_APP_FACEBOOK_ID: process.env.REACT_APP_FACEBOOK_ID,
  },
  images: {
    domains: ["localhost", "wickyick-profile-images.s3.amazonaws.com"],
  },
};
