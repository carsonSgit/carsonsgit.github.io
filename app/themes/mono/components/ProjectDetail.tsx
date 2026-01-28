import BracketLink from "./BracketLink";

interface ProjectDetailProps {
	description: string;
	github?: string;
	website?: string;
}

const ProjectDetail = ({ description, github, website }: ProjectDetailProps) => {
	return (
		<div className="detail-panel__content">
			<p className="detail-panel__description">{description}</p>
			<div className="detail-panel__links">
				{github && (
					<BracketLink
						href={github}
						target="_blank"
						rel="noopener noreferrer"
					>
						github
					</BracketLink>
				)}
				{website && (
					<BracketLink
						href={website}
						target="_blank"
						rel="noopener noreferrer"
					>
						website
					</BracketLink>
				)}
			</div>
		</div>
	);
};

export default ProjectDetail;
