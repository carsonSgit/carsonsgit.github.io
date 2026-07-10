import { projects } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";

const ProjectList = () => {
	return (
		<section
			aria-labelledby="projects-heading"
			className="section-block section-block--projects section-block--editorial"
		>
			<div className="section-heading">
				<h2
					id="projects-heading"
					className="section-title section-title--secondary"
				>
					Projects
				</h2>
			</div>
			<div className="section-list section-list--projects">
				{projects.map((project) => {
					return (
						<details key={project.title} className="section-list__item">
							<summary className="section-list__trigger">
								<div className="section-list__header">
									<div className="section-list__meta">
										<span className="section-list__title">{project.title}</span>
									</div>
									<p className="section-list__summary">{project.description}</p>
								</div>
							</summary>
							<div className="detail-panel">
								<div className="detail-panel__inner">
									<ProjectDetail
										projectTitle={project.title}
										links={project.links}
										caseStudySlug={project.caseStudySlug}
										stack={project.languages}
										year={project.year}
									/>
								</div>
							</div>
						</details>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectList;
