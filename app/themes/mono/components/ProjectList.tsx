import { Accordion } from "@base-ui/react/accordion";
import { projects } from "../../../data/portfolioProjects";
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
	return (
		<section>
			<h2>Projects</h2>
			<Accordion.Root multiple className="section-list" aria-label="Projects">
				{projects.map((project) => (
					<Accordion.Item
						key={project.title}
						value={project.title}
						className="section-list__item"
					>
						<Accordion.Header>
							<Accordion.Trigger className="section-list__trigger">
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
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Panel className="detail-panel" keepMounted>
							<ProjectDetail
								description={project.description}
								github={project.github}
								website={project.website}
							/>
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</section>
	);
};

export default ProjectList;
