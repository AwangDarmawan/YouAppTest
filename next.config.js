/** @type {import('next').NextConfig} */
const nextConfig = {
 images:{
    remotePatterns:[
        {
            hostname:"placehold.co"
        },
        {
            hostname: "png.pngtree.com", // Tambahkan hostname ini
          },
    ]
 },
}

module.exports = nextConfig
