import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: Netlify serves ./out with no server runtime.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ["@atreya/brand", "@atreya/ui"],
  // Monorepo: tell Turbopack where the workspace root is.
  turbopack: { root: path.join(__dirname, "../..") },
};

export default nextConfig;
