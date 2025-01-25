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

        {
            hostname: "blob:https://awang-app-test.vercel.app/",
        },
        
    ]
 },
}

module.exports = nextConfig
