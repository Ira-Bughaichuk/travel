/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        formats:['image/avif', 'image/webp'],
        deviceSizes:[320, 480, 768, 1280],
    }
}

module.exports = nextConfig
