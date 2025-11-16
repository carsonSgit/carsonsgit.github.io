import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "",
	images: {
		unoptimized: true,
		remotePatterns: [{ hostname: "api.microlink.io" }],
	},
	sassOptions: {
		includePaths: ["./app"],
	},
};

export default nextConfig;
