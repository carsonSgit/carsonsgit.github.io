import { Accordion } from "@base-ui/react/accordion";
import { Badge } from "@/components/ui/badge";
import { getBadgeStyle } from "@/utils/colors";
import { educationExp } from "../../../data/experiences";

const EducationList = () => {
	return (
		<section>
			<h2>Education</h2>
			<Accordion.Root multiple className="section-list" aria-label="Education">
				{educationExp.map((item) => {
					const dateRange = item.date.join(" - ");

					return (
						<Accordion.Item
							key={`${item.title}-${item.institution}`}
							value={`${item.title}-${item.institution}`}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger className="section-list__trigger">
									<span className="section-list__marker" aria-hidden="true">
										*
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
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="detail-panel" keepMounted>
								<div className="detail-panel__content">
									<ul className="detail-panel__description-list">
										{item.description.map((desc) => (
											<li key={desc}>{desc}</li>
										))}
									</ul>
									<div className="detail-panel__badges flex flex-row flex-wrap gap-2 mt-2">
										{Object.values(item.experienceBadges).map((badge) => (
											<Badge
												key={badge.label}
												className="detail-panel__badge rounded-none text-xs hover:cursor-default"
												style={{
													backgroundColor: getBadgeStyle(badge.backgroundColour)
														.background,
													borderColor: getBadgeStyle(badge.backgroundColour)
														.foreground,
													color: getBadgeStyle(badge.backgroundColour)
														.foreground,
												}}
											>
												{badge.label}
											</Badge>
										))}
									</div>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default EducationList;
