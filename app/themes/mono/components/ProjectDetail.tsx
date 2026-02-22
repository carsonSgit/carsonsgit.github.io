import BracketLink from "./BracketLink";

interface ProjectDetailProps {
	description: string;
	projectTitle: string;
	github?: string;
	website?: string;
}

const ProjectDetail = ({
	description,
	projectTitle,
	github,
	website,
}: ProjectDetailProps) => {
	return (
		<div className="detail-panel__content">
			<p className="detail-panel__description">{description}</p>
			<div className="detail-panel__links">
				{github && (
					<BracketLink
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						srContext={`GitHub repository for ${projectTitle}`}
					>
						github
					</BracketLink>
				)}
				{website && (
					<BracketLink
						href={website}
						target="_blank"
						rel="noopener noreferrer"
						srContext={`Project website for ${projectTitle}`}
					>
						website
					</BracketLink>
				)}
			</div>
		</div>
	);
};

export default ProjectDetail;
