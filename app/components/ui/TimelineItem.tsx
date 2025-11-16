import type React from "react";
import { statistics } from "../../data/statistics";
import type { EducationItem, ExperienceItem } from "../../types/types";
import { Card } from "./card";
import TimelineStats from "./TimelineStats";

interface TimelineItemProps {
	item: EducationItem | ExperienceItem;
	index: number;
	isEducation: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
	item,
	index,
	isEducation,
}) => {
	if (isEducation) {
		const educationItem = item as EducationItem;
		return (
			<Card variant="default" key={index} className="my-5 max-w-md min-w-full">
				<h3 className="text-lg font-bold text-gray-800">
					<a
						href={educationItem.link}
						target="_blank"
						rel="noopener noreferrer"
						className="timeline-title-link"
					>
						<span className="timeline-role">{educationItem.title}</span>
						<br />
						<span className="timeline-company">
							{educationItem.institution}
						</span>
					</a>
				</h3>
				<div className="text-sm text-gray-500">{educationItem.date}</div>
				<ul className="text-sm text-gray-800">
					{educationItem.description.map((desc: string) => (
						<li key={desc}>{desc}</li>
					))}
				</ul>
				<TimelineStats
					statsKey={educationItem.statsKey}
					statistics={statistics}
				/>
			</Card>
		);
	} else {
		const experienceItem = item as ExperienceItem;
		return (
			<Card variant="default" key={index} className="my-5 max-w-md min-w-full">
				<h3 className="text-lg font-bold text-gray-800">
					<a
						href={experienceItem.link}
						target="_blank"
						rel="noopener noreferrer"
						className="timeline-title-link"
					>
						<span className="text-lg font-bold text-gray-800">
							{experienceItem.title}
						</span>
						<br />
						<span className="timeline-company">{experienceItem.company}</span>
					</a>
				</h3>
				<div className="text-sm text-gray-500">{experienceItem.date}</div>
				<ul className="text-sm text-gray-800">
					{experienceItem.description.map((desc: string) => (
						<li key={desc}>{desc}</li>
					))}
				</ul>
				<TimelineStats
					statsKey={experienceItem.statsKey}
					statistics={statistics}
				/>
			</Card>
		);
	}
};

export default TimelineItem;
