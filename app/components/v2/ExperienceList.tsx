import { useState, useCallback } from "react";
import { experience } from "../../data/experience";

const ExperienceList = () => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const toggleExpanded = useCallback((index: number) => {
		setExpandedIndex((prev) => (prev === index ? -1 : index));
	}, []);

	const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleExpanded(index);
		}
	}, [toggleExpanded]);

	return (
		<section>
			<h2>Experience</h2>
			<div className="section-list" role="list" aria-label="Experience">
				{experience.map((item, index) => {
					const isExpanded = expandedIndex === index;
					const year = item.date.split(" ")[0].replace(",", "");

					return (
						<div
							key={`${item.title}-${item.company}`}
							className={`section-list__item ${isExpanded ? "section-list__item--expanded" : ""}`}
							role="listitem"
							aria-expanded={isExpanded}
							tabIndex={0}
							onClick={() => toggleExpanded(index)}
							onKeyDown={(e) => handleKeyDown(e, index)}
						>
							<span className="section-list__marker" aria-hidden="true">
								&gt;
							</span>
							<div className="section-list__header">
								<span className="section-list__date">{year}</span>
								<span className="section-list__role">
									{item.title}{" "}
									<a
										href={item.link}
										className="section-list__company-link"
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										onKeyDown={(e) => e.stopPropagation()}
									>
										@ {item.company}
									</a>
								</span>
							</div>
							<div
								className={`detail-panel ${isExpanded ? "detail-panel--open" : ""}`}
								aria-hidden={!isExpanded}
							>
								{isExpanded && (
									<div className="detail-panel__content">
										<ul className="detail-panel__description-list">
											{item.description.map((desc) => (
												<li key={desc}>{desc}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ExperienceList;
