import { useState, useCallback } from "react";
import { education } from "../../data/education";

function formatDateRange(dateStr: string): string {
	const parts = dateStr.split(" - ");
	const start = parts[0]?.split(" ");
	const end = parts[1]?.split(" ");

	const startYear = start?.[start.length - 1] ?? "";
	const endPart = end?.[end.length - 1]?.toLowerCase() ?? "";
	const endLabel = endPart === "ongoing" ? "now" : endPart;

	return `${startYear}-${endLabel}`;
}

const EducationList = () => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const toggleExpanded = useCallback((index: number) => {
		setExpandedIndex((prev) => (prev === index ? -1 : index));
	}, []);

	const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
		// Only handle Enter/Space for accessibility - vim keys (l, j, k, i) are handled by useVimNavigation
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleExpanded(index);
		}
	}, [toggleExpanded]);

	return (
		<section>
			<h2>Education</h2>
			<div className="section-list" role="list" aria-label="Education">
				{education.map((item, index) => {
					const isExpanded = expandedIndex === index;
					const dateRange = formatDateRange(item.date);

					return (
						<div
							key={`${item.title}-${item.institution}`}
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
								<span className="section-list__date">{dateRange}</span>
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
										@ {item.institution}
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

export default EducationList;
