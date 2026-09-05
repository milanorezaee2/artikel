import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app is server-rendered (middleware + /api route handlers + signed-cookie admin
  // session), so it is deployed to Netlify — never as a static export. See README.
  trailingSlash: true,
  images: {
    unoptimized: true,
    // The default candidate list tops out at 3840w, which appends dead weight to every srcset.
    // Nothing on this site renders wider than 2×1920; capping the list trims ~40% off each <img>.
    deviceSizes: [640, 750, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
