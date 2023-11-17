/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     formats:['image/avif', 'image/webp'],
    //     deviceSizes:[320, 480, 768, 1280],
    // }
    images: {
        deviceSizes: [320, 480, 768, 1280].flatMap(size => [size, size * 2]),
    },
}

module.exports = nextConfig
