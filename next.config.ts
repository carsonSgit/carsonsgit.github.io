import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "",
	images: {
		unoptimized: true,
	},
	sassOptions: {
		includePaths: ["./app"],
	},
};

export default nextConfig;
