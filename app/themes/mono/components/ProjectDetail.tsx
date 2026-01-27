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
					<a
						href={github}
						className="bracket-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						github
					</a>
				)}
				{website && (
					<a
						href={website}
						className="bracket-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						website
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectDetail;
