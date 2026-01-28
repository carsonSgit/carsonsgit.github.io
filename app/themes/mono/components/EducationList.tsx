import { Accordion } from "@base-ui/react/accordion";
import { education } from "../../../data/education";

function formatDateRange(dateStr: string): string {
	const parts = dateStr.split(" - ");
	const start = parts[0]?.split(" ");
	const end = parts[1]?.split(" ");

	const startYear = start?.[start.length - 1] ?? "";
	const endPart = end?.[end.length - 1]?.toLowerCase() ?? "";
	const endLabel = endPart === "present" ? "NOW" : endPart;

	return `${startYear}-${endLabel}`;
}

const EducationList = () => {
	return (
		<section>
			<h2>Education</h2>
			<Accordion.Root multiple className="section-list" aria-label="Education">
				{education.map((item) => {
					const dateRange = formatDateRange(item.date);

					return (
						<Accordion.Item
							key={`${item.title}-${item.institution}`}
							value={`${item.title}-${item.institution}`}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger className="section-list__trigger">
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

export default EducationList;
