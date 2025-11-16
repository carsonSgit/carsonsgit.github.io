import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { experience } from "../../data/experience";
import { education } from "../../data/education";
import TimelineItem from "../ui/TimelineItem";
import TimelineSection from "../ui/TimelineSection";
import "../../styles/components.scss";

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	return (
		<div className="experience-grid" ref={containerRef}>
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
