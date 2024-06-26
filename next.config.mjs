/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || "",
  },
};

export default nextConfig;
