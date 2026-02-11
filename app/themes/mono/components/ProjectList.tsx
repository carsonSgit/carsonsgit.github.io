import type * as z from "zod";
import { Accordion } from "@base-ui/react/accordion";
import ProjectDetail from "./ProjectDetail";
import { projects } from "../../../data/projects";
import type { projectSchema } from "@/types/zodTypes";
import { getBadgeStyle } from "@/utils/colors";
import { Badge } from "@/components/ui/badge";

const ProjectList = () => {
	return (
		<section>
			<h2>Projects</h2>
			<Accordion.Root multiple className="section-list" aria-label="Projects">
				{projects.map((project: z.infer<typeof projectSchema>) => (
					<Accordion.Item
						key={project.title}
						value={project.title}
						className="section-list__item"
					>
						<Accordion.Header>
							<Accordion.Trigger className="section-list__trigger">
								<span className="section-list__marker mt-0.5 ml-1" aria-hidden="true">
									*
								</span>
								<div className="section-list__header ml-2">
									<span className="section-list__year">{project.year}</span>
									<span className="section-list__title">{project.title}</span>
									<div className="section-list__badges flex flex-row flex-wrap gap-2 mt-2">
										{Object.values(project.languages).map((lang) => (
											<Badge key={lang.name} className="section-list__badge rounded-none text-xs" 
											style={{ 
												backgroundColor: getBadgeStyle(lang.backgroundColour).background,
												borderColor: getBadgeStyle(lang.backgroundColour).foreground,
												color: getBadgeStyle(lang.backgroundColour).foreground, }}>
												{lang.name}
											</Badge>
										))}
									</div>
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
