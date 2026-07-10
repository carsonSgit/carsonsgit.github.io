import Image from "next/image";
import Link from "next/link";
import "@/case-studies.scss";
import { caseStudies } from "@/data/caseStudies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
	title: "Case Studies | Carson Spriggs",
	description:
		"Short write-ups of selected hackathon projects by Carson Spriggs, focused on implementation choices, constraints, and outcomes.",
	pathname: "/case-studies",
	keywords: [
		"Carson Spriggs case studies",
		"hackathon project write-ups",
		"software engineer portfolio",
		"Canada software engineer portfolio",
	],
});

const monthYear = (iso: string) =>
	new Date(`${iso}T00:00:00`).toLocaleDateString("en-CA", {
		month: "long",
		year: "numeric",
	});

export default function CaseStudiesIndexPage() {
	return (
		<main className="case-study-page">
			<div className="case-study-shell case-study-shell--index">
				<Link href="/" className="case-study-backlink">
					Back home
				</Link>
				<header className="case-studies-hero">
					<h1 className="case-studies-title">Case Studies</h1>
					<p className="case-studies-intro">
						Readable project write-ups on how each prototype was framed, built,
						and shaped into something more intentional than a demo.
					</p>
				</header>
				<section aria-label="Case study list" className="case-studies-panels">
					{caseStudies.map((caseStudy) => (
						<article
							key={caseStudy.slug}
							className="case-study-panel"
							data-accent={caseStudy.presentation?.accent ?? "mist"}
						>
							<Link
								href={`/case-studies/${caseStudy.slug}`}
								className="case-study-panel__surface"
							>
								<div className="case-study-panel__content">
									<p className="case-study-panel__meta">
										<strong>{caseStudy.projectType}</strong> ·{" "}
										{monthYear(caseStudy.publishedAt)}
									</p>
									<h2 className="case-study-panel__title">{caseStudy.title}</h2>
									<p className="case-study-panel__summary">
										{caseStudy.summary}
									</p>
									<span className="case-study-panel__read">
										Continue reading
										<span
											className="case-study-panel__read-arrow"
											aria-hidden="true"
										>
											→
										</span>
									</span>
								</div>
								{caseStudy.image ? (
									<div className="case-study-panel__media">
										<Image
											src={caseStudy.image}
											alt=""
											fill
											sizes="(max-width: 960px) 100vw, 20rem"
										/>
									</div>
								) : null}
							</Link>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
