"use client";

import { useRef, useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import {
	educationExp,
	extraCurricularExp,
	professionalExp,
} from "@/data/experiences";
import { projects } from "@/data/projects";

type Entry = {
	meta: string;
	title: string;
	summary: string;
	href: string;
	external: boolean;
};

type Tab = {
	id: string;
	label: string;
	entries: Entry[];
};

const dateRange = ([start, end]: string[]) =>
	start === end ? start : `${start} — ${end}`;

const fromExperience = (items: typeof professionalExp): Entry[] =>
	items.map((item) => ({
		meta: dateRange(item.date),
		title: `${item.title} at ${item.institution}`,
		summary: item.tagline ?? item.description[0],
		href: item.link,
		external: true,
	}));

const TABS: Tab[] = [
	{
		id: "experience",
		label: "Experience",
		entries: fromExperience(professionalExp),
	},
	{
		id: "academics",
		label: "Academics",
		entries: fromExperience(educationExp),
	},
	{
		id: "extra-curricular",
		label: "Extra-Curricular",
		entries: fromExperience(extraCurricularExp),
	},
	{
		id: "projects",
		label: "Projects",
		entries: projects.map((project) => ({
			meta: String(project.year),
			title: project.title,
			summary: project.description,
			href: project.caseStudySlug
				? `/case-studies/${project.caseStudySlug}`
				: project.links[0].href,
			external: !project.caseStudySlug,
		})),
	},
	{
		id: "case-studies",
		label: "Case Studies",
		entries: caseStudies.map((caseStudy) => ({
			meta: caseStudy.projectType,
			title: caseStudy.title,
			summary: caseStudy.summary,
			href: `/case-studies/${caseStudy.slug}`,
			external: false,
		})),
	},
];

const Directory = () => {
	const [activeId, setActiveId] = useState(TABS[0].id);
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

	const activeIndex = TABS.findIndex((tab) => tab.id === activeId);
	const active = TABS[activeIndex];

	const moveTo = (index: number) => {
		const next = TABS[(index + TABS.length) % TABS.length];
		setActiveId(next.id);
		tabRefs.current[next.id]?.focus();
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			moveTo(activeIndex + 1);
		} else if (event.key === "ArrowLeft") {
			moveTo(activeIndex - 1);
		} else if (event.key === "Home") {
			moveTo(0);
		} else if (event.key === "End") {
			moveTo(TABS.length - 1);
		} else {
			return;
		}
		event.preventDefault();
	};

	return (
		<section className="directory" aria-label="Work and background">
			<div
				className="directory__tabs"
				role="tablist"
				aria-label="Sections"
				onKeyDown={handleKeyDown}
			>
				{TABS.map((tab) => (
					<button
						key={tab.id}
						type="button"
						role="tab"
						id={`tab-${tab.id}`}
						className="directory__tab"
						aria-selected={tab.id === activeId}
						aria-controls={`panel-${tab.id}`}
						tabIndex={tab.id === activeId ? 0 : -1}
						ref={(node) => {
							tabRefs.current[tab.id] = node;
						}}
						onClick={() => setActiveId(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div
				role="tabpanel"
				id={`panel-${active.id}`}
				aria-labelledby={`tab-${active.id}`}
			>
				<ul className="directory__list" role="list">
					{active.entries.map((entry) => (
						<li key={entry.title}>
							<a
								className="entry"
								href={entry.href}
								{...(entry.external
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
							>
								<span className="entry__meta">{entry.meta}</span>
								<span className="entry__title">
									{entry.title}
									{entry.external ? (
										<span className="sr-only"> (opens in new tab)</span>
									) : null}
								</span>
								<p className="entry__summary">{entry.summary}</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Directory;
