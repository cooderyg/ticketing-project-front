/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["young-gyu-bucket.s3.ap-northeast-2.amazonaws.com", "*"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "young-gyu-bucket.s3.ap-northeast-2.amazonaws.com",
    //     port: "",
    //     pathname: "/images",
    //   },
    // ],
  },
};
module.exports = nextConfig;
