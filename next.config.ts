import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  basePath: isProd ? "/auth-clario" : "",
  assetPrefix: isProd ? "/auth-clario/" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
