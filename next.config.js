/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true
    },
 images:{
    remotePatterns:[
        {
            hostname:"placehold.co"
        },
        {
            hostname: "png.pngtree.com",
          },
    ]
 },
}

module.exports = nextConfig
