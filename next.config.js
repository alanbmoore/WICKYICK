/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
  reactStrictMode: true,
  distDir: "build",
  env: {
    REACT_APP_URL: process.env.REACT_APP_URL,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
    REACT_APP_GOOGLE_MAP_KEY: process.env.REACT_APP_GOOGLE_MAP_KEY,
    REACT_APP_GG_APP_ID: process.env.REACT_APP_GG_APP_ID,
    REACT_APP_FACEBOOK_ID: process.env.REACT_APP_FACEBOOK_ID,
    REACT_APP_INSTAGRAM_URL: process.env.REACT_APP_INSTAGRAM_URL,
    REACT_APP_INSTAGRAM_CLIENT_ID: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
    REACT_APP_INSTAGRAM_REDIRECT_URI:
      process.env.REACT_APP_INSTAGRAM_REDIRECT_URI,
    REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET:
      process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID:
      process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
  },
  images: {
    domains: [
      "localhost",
      "wickyick-profile-images.s3.amazonaws.com",
      "scontent.cdninstagram.com",
      "video.cdninstagram.com",
      "scontent-lga3-2.cdninstagram.com",
    ],
  },
};
