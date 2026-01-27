import { projects } from "../../../data/portfolioProjects";
import { useExpandableList } from "../../../core/hooks";
import ProjectDetail from "./ProjectDetail";

// Map language names to CSS class modifiers
function getTagClass(name: string): string {
	const normalized = name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
	const classMap: Record<string, string> = {
		ai: "ai",
		"computer-vision": "cv",
		typescript: "ts",
		python: "py",
		"c#": "csharp",
		hardware: "hardware",
		azure: "azure",
		iot: "iot",
		"machine-learning": "ml",
		"threejs": "threejs",
		postgresql: "db",
		"vector-db": "db",
		rtmp: "rtmp",
		neuroscience: "neuro",
		"r&d": "rnd",
		mantine: "mantine",
		zustand: "zustand",
	};
	return classMap[normalized] || "default";
}

const ProjectList = () => {
	const { isExpanded, toggleExpanded, handleKeyDown } = useExpandableList(projects);

	return (
		<section>
			<h2>Projects</h2>
			<div className="section-list" role="list" aria-label="Projects">
				{projects.map((project, index) => {
					const expanded = isExpanded(index);

					return (
						<div
							key={project.title}
							className={`section-list__item ${expanded ? "section-list__item--expanded" : ""}`}
							role="listitem"
							aria-expanded={expanded}
							tabIndex={0}
							onClick={() => toggleExpanded(index)}
							onKeyDown={(e) => handleKeyDown(e, index)}
						>
							<span className="section-list__marker" aria-hidden="true">
								&gt;
							</span>
							<div className="section-list__header">
								<span className="section-list__title">{project.title}</span>
								<span className="section-list__tags">
									{project.languages.map((lang) => (
										<span
											key={lang.name}
											className={`section-list__tag section-list__tag--${getTagClass(lang.name)}`}
										>
											{lang.name.toLowerCase()}
										</span>
									))}
								</span>
							</div>
							<div
								className={`detail-panel ${expanded ? "detail-panel--open" : ""}`}
								aria-hidden={!expanded}
							>
								{expanded && (
									<ProjectDetail
										description={project.description}
										github={project.github}
										website={project.website}
									/>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectList;
