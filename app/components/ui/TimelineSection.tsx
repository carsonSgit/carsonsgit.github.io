import type React from "react";

interface TimelineSectionProps {
	title: string;
	children: React.ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
	title,
	children,
}) => {
	return (
		<div className="timeline-section">
			<div className="ProjectsTitleContainer">
				<h1 className="ProjectsTitle">{title}</h1>
			</div>
			{children}
		</div>
	);
};

export default TimelineSection;
