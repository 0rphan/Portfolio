import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Only apply /Portfolio prefix when building in GitHub Actions
  basePath: isGithubActions ? "/Portfolio" : "",
  assetPrefix: isGithubActions ? "/Portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
