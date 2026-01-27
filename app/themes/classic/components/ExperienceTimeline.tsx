import { experience } from "../../../data/experience";
import { education } from "../../../data/education";
import TimelineItem from "./TimelineItem";
import TimelineSection from "./TimelineSection";

const ExperienceTimeline = () => {
	return (
		<div className="experience-grid">
			<div className="timeline">
				<TimelineSection title="EDUCATION">
					{education.map((item, index) => (
						<TimelineItem
							key={index}
							item={item}
							index={index}
							isEducation={true}
						/>
					))}
				</TimelineSection>

				<TimelineSection title="EXPERIENCE">
					{experience.map((item, index) => (
						<TimelineItem
							key={item.statsKey}
							item={item}
							index={index}
							isEducation={false}
						/>
					))}
				</TimelineSection>
			</div>
		</div>
	);
};

export default ExperienceTimeline;
