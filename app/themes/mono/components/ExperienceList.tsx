import { professionalExp } from "../../../data/experiences";

const ExperienceList = () => {
	return (
		<section
			aria-labelledby="experience-heading"
			className="section-block section-block--editorial"
		>
			<div className="section-heading">
				<h2
					id="experience-heading"
					className="section-title section-title--secondary"
				>
					Experience
				</h2>
			</div>
			<div className="section-list">
				{professionalExp.map((item) => {
					const dateRange = item.date.join(" - ");

					return (
						<details
							key={`${item.title}-${item.institution}`}
							className="section-list__item"
						>
							<summary className="section-list__trigger">
								<div className="section-list__header">
									<span className="section-list__role">
										{item.title} @ {item.institution}
									</span>
									<p className="section-list__summary">
										{item.tagline ?? item.description[0]}
									</p>
								</div>
							</summary>
							<div className="detail-panel">
								<div className="detail-panel__inner">
									<div className="detail-panel__content">
										<div className="detail-panel__intro">
											<p className="detail-panel__meta">{dateRange}</p>
										</div>
										<ul className="detail-panel__description-list">
											{item.description.map((desc) => (
												<li
													key={desc}
													className="detail-panel__description-item"
												>
													{desc}
												</li>
											))}
										</ul>
										<div className="detail-panel__badges">
											{item.experienceBadges.map((badge) => (
												<span key={badge} className="detail-panel__badge">
													{badge}
												</span>
											))}
										</div>
										{item.roles && item.roles.length > 0 && (
											<div className="detail-panel__roles">
												{item.roles.map((role) => (
													<div
														key={`${role.title}-${role.date.join("-")}`}
														className="detail-panel__role"
													>
														<p className="detail-panel__role-title">
															{role.title}
															<span
																className="detail-panel__meta-sep"
																aria-hidden="true"
															>
																·
															</span>
															<span className="detail-panel__role-date">
																{role.date.join(" - ")}
															</span>
														</p>
														<ul className="detail-panel__description-list">
															{role.description.map((desc) => (
																<li
																	key={desc}
																	className="detail-panel__description-item"
																>
																	{desc}
																</li>
															))}
														</ul>
													</div>
												))}
											</div>
										)}
										<div className="detail-panel__links">
											{item.caseStudySlug && (
												<a
													href={`/case-studies/${item.caseStudySlug}`}
													className="detail-panel__link detail-panel__link--primary"
												>
													Case study
												</a>
											)}
											<a
												href={item.link}
												className="detail-panel__link"
												target="_blank"
												rel="noopener noreferrer"
											>
												Visit {item.institution}
												<span className="sr-only">(opens in new tab)</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</details>
					);
				})}
			</div>
		</section>
	);
};

export default ExperienceList;
