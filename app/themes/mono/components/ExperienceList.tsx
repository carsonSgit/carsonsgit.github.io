import { experience } from "../../../data/experience";
import { useExpandableList } from "../../../core/hooks";

const ExperienceList = () => {
	const { isExpanded, toggleExpanded, handleKeyDown } = useExpandableList(experience);

	return (
		<section>
			<h2>Experience</h2>
			<div className="section-list" role="list" aria-label="Experience">
				{experience.map((item, index) => {
					const expanded = isExpanded(index);
					const year = item.date.split(" ")[0].replace(",", "");

					return (
						<div
							key={`${item.title}-${item.company}`}
							className={`section-list__item ${expanded ? "section-list__item--expanded" : ""}`}
							role="listitem"
							aria-expanded={expanded}
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
								className={`detail-panel ${expanded ? "detail-panel--open" : ""}`}
								aria-hidden={!expanded}
							>
								{expanded && (
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
