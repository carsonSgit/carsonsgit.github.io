import { Accordion } from "@base-ui/react/accordion";
import { experience } from "../../../data/experience";

const ExperienceList = () => {
	return (
		<section>
			<h2>Experience</h2>
			<Accordion.Root multiple className="section-list" aria-label="Experience">
				{experience.map((item) => {
					const year = item.date.split(" ")[0].replace(",", "");

					return (
						<Accordion.Item
							key={`${item.title}-${item.company}`}
							value={`${item.title}-${item.company}`}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger className="section-list__trigger">
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
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="detail-panel" keepMounted>
								<div className="detail-panel__content">
									<ul className="detail-panel__description-list">
										{item.description.map((desc) => (
											<li key={desc}>{desc}</li>
										))}
									</ul>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default ExperienceList;
