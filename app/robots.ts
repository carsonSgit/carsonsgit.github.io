import type { MetadataRoute } from "next";
import { absoluteUrl, BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		host: BASE_URL,
		sitemap: absoluteUrl("/sitemap.xml"),
	};
}
