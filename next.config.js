/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  publicExcludes: ['**/*'],
  buildExcludes:[() => true],
})

module.exports = withPWA({
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,}
)
