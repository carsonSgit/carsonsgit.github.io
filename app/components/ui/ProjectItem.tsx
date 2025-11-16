"use client";

import { Github, Link } from "lucide-react";
import type React from "react";
import { languageBorders } from "../../data/portfolioProjects";
import type { ProjectItemProps, ProjectLanguage } from "../../types/projects";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card } from "./card"; // adjust path to your Card component

const ProjectItem: React.FC<ProjectItemProps> = ({
	project,
}: ProjectItemProps) => {
	return (
		<Card className="p-5" variant="default">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-lg font-bold text-gray-800">{project.title}</h2>

				<div className="flex gap-2 text-sm text-gray-800">
					{project.github && (
						<Button variant="ghost" size="icon" asChild>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github />
							</a>
						</Button>
					)}

					{project.website && (
						<Button variant="ghost" size="icon" asChild>
							<a
								href={project.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Link />
							</a>
						</Button>
					)}
				</div>
			</div>

			<div className="flex gap-1 flex-wrap">
				{project.languages.map((language: ProjectLanguage) => (
					<Badge
						key={language.name}
						variant="default"
						style={{
							backgroundColor: language.backgroundColour,
							borderColor: languageBorders(language.backgroundColour)
								.borderColor,
							color: languageBorders(language.backgroundColour).color,
						}}
						className="font-regular"
					>
						{language.name}
					</Badge>
				))}
			</div>

			<div className="mt-3 text-sm font-medium text-gray-800">
				{project.description}
			</div>
		</Card>
	);
};

export default ProjectItem;
