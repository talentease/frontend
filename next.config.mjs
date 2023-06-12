/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  trailingSlash: true
}

export default nextConfig
