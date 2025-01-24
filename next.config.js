/** @type {import('next').NextConfig} */
const nextConfig = {
 images:{
    remotePatterns:[
        {
            hostname:"placehold.co"
        },
        {
            hostname: "png.pngtree.com", 
          },
    ],
 },
 webpack: (config) => {
    const path = require("path");
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"), 
    };
    return config;
  },
};


module.exports = nextConfig
