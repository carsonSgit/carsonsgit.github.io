const LINKS = [
	{ label: "github", href: "https://github.com/carsonSgit" },
	{ label: "linkedin", href: "https://linkedin.com/in/carsons-git" },
	{ label: "email", href: "mailto:carsonsgit@gmail.com" },
];

const Intro = () => {
	return (
		<section className="intro">
			<h1 tabIndex={0}>Carson</h1>
			<p className="intro__subtitle" tabIndex={0}>Software Developer</p>
			<p className="intro__about" tabIndex={0}>
				Engineering Technology student at Memorial University, CS alumni from
				John Abbott College. I build things with TypeScript, Python, and
				whatever else gets the job done. When I'm not coding, I'm probably at a
				hackathon or tinkering with IoT hardware.
			</p>
			<nav className="intro__links" aria-label="Social links">
				{LINKS.map((link) => (
					<a
						key={link.label}
						href={link.href}
						className="bracket-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
					</a>
				))}
			</nav>
		</section>
	);
};

export default Intro;
