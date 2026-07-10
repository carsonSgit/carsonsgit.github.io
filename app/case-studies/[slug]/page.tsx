import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@/case-studies.scss";
import {
	type CaseStudy,
	caseStudies,
	getCaseStudyBySlug,
} from "@/data/caseStudies";

const BASE_URL = "https://carsonspriggs.me";
const DEFAULT_SOCIAL_IMAGE = "/klungo.png";

type RouteParams = {
	slug: string;
};

type PageProps = {
	readonly params: Promise<RouteParams>;
};

function formatCaseStudyDate(value: string) {
	return new Intl.DateTimeFormat("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(new Date(`${value}T00:00:00Z`));
}

export function generateStaticParams() {
	return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		return {};
	}

	const title =
		caseStudy.seo?.title ?? `${caseStudy.title} Case Study | Carson Spriggs`;
	const description = caseStudy.seo?.description ?? caseStudy.summary;
	const socialImage = caseStudy.seo?.socialImage ?? DEFAULT_SOCIAL_IMAGE;
	const canonicalPath = `/case-studies/${caseStudy.slug}`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalPath,
		},
		keywords: [
			caseStudy.title,
			...caseStudy.stack,
			"Carson Spriggs",
			"case study",
			"hackathon project",
			"software engineer",
		],
		openGraph: {
			title,
			description,
			url: `${BASE_URL}${canonicalPath}`,
			type: "article",
			images: [
				{
					url: socialImage,
					width: 1200,
					height: 630,
					alt: `${caseStudy.title} case study preview`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [socialImage],
		},
	};
}

function StackList({ caseStudy }: { caseStudy: CaseStudy }) {
	return (
		<ul className="csa-stack" aria-label={`${caseStudy.title} stack`}>
			{caseStudy.stack.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		notFound();
	}

	const highlights = caseStudy.presentation?.highlights ?? [];

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline:
			caseStudy.seo?.title ?? `${caseStudy.title} Case Study | Carson Spriggs`,
		description: caseStudy.seo?.description ?? caseStudy.summary,
		datePublished: caseStudy.publishedAt,
		dateModified: caseStudy.updatedAt,
		author: {
			"@type": "Person",
			name: "Carson Spriggs",
			url: BASE_URL,
		},
		publisher: {
			"@type": "Person",
			name: "Carson Spriggs",
			url: BASE_URL,
		},
		mainEntityOfPage: `${BASE_URL}/case-studies/${caseStudy.slug}`,
		url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
		image: [`${BASE_URL}${caseStudy.seo?.socialImage ?? DEFAULT_SOCIAL_IMAGE}`],
		keywords: caseStudy.stack.join(", "),
		about: caseStudy.stack,
		abstract: caseStudy.summary,
	};

	return (
		<main
			className="case-study-page"
			data-accent={caseStudy.presentation?.accent ?? "mist"}
		>
			<article className="case-study-shell case-study-shell--article">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD with trusted local data
					dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
				/>

				<nav className="case-study-breadcrumb" aria-label="Breadcrumb">
					<Link href="/case-studies" className="case-study-breadcrumb__link">
						Case Studies
					</Link>
					<span aria-hidden="true">/</span>
					<span aria-current="page">{caseStudy.title}</span>
				</nav>

				<header className="csa-split">
					<div className="csa-split__meta">
						{caseStudy.presentation?.eyebrow ? (
							<p className="csa-eyebrow">{caseStudy.presentation.eyebrow}</p>
						) : null}
						<h1 className="csa-split__title">{caseStudy.title}</h1>
						<p className="csa-split__summary">{caseStudy.summary}</p>
						<p className="csa-meta-line">
							{caseStudy.projectType}
							<span aria-hidden="true"> · </span>
							Published {formatCaseStudyDate(caseStudy.publishedAt)}
							<span aria-hidden="true"> · </span>
							Updated {formatCaseStudyDate(caseStudy.updatedAt)}
						</p>
					</div>
					{caseStudy.image ? (
						<div className="csa-media">
							<Image
								src={caseStudy.image}
								alt={`${caseStudy.title} hero image`}
								fill
								priority
								sizes="(max-width: 960px) 100vw, 26rem"
							/>
						</div>
					) : null}
				</header>

				{highlights.length > 0 ? (
					<dl className="csa-highlights">
						{highlights.map((highlight) => (
							<div key={highlight.label} className="csa-highlight">
								<dt>{highlight.label}</dt>
								<dd>{highlight.value}</dd>
							</div>
						))}
					</dl>
				) : null}

				<div className="csa-layout">
					<aside className="csa-rail" aria-label="Article navigation">
						<nav className="csa-rail__group" aria-label="On this page">
							<p className="csa-rail__label">On this page</p>
							<ol className="csa-rail__list">
								{caseStudy.sections.map((section) => (
									<li key={section.id}>
										<a
											className="csa-rail__link"
											href={`#${section.id}-heading`}
										>
											{section.title}
										</a>
									</li>
								))}
							</ol>
						</nav>
						<div className="csa-rail__group">
							<p className="csa-rail__label">Stack</p>
							<StackList caseStudy={caseStudy} />
						</div>
						<div className="csa-rail__group">
							<p className="csa-rail__label">Links</p>
							<div className="case-study-links">
								{caseStudy.links.map((link) => (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noreferrer"
										className="case-study-ext-link"
									>
										<span>{link.label}</span>
										<span className="sr-only">
											{` (${link.label} for ${caseStudy.title}, opens in new tab)`}
										</span>
									</a>
								))}
							</div>
						</div>
					</aside>
					<div className="case-study-body">
						{caseStudy.sections.map((section) => (
							<section
								key={section.id}
								className="case-study-section"
								aria-labelledby={`${section.id}-heading`}
							>
								<h2 id={`${section.id}-heading`}>{section.title}</h2>
								<div className="case-study-section__body">
									{section.paragraphs.map((paragraph, idx) => (
										<p key={`${section.id}-p-${idx}`}>{paragraph}</p>
									))}
								</div>
							</section>
						))}
					</div>
				</div>
			</article>
		</main>
	);
}
