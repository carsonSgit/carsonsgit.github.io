import { Avatar } from "@base-ui/react/avatar";
import BracketLink from "./BracketLink";

const LINKS = [
	{ label: "github", href: "https://github.com/carsonSgit" },
		{ label: "linkedin", href: "https://linkedin.com/in/carsonspriggs" },
		{ label: "email", href: "mailto:carsonspriggs6@gmail.com" },
];

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro__header">
				<Avatar.Root className="intro__avatar">
					<Avatar.Fallback>CS</Avatar.Fallback>
				</Avatar.Root>
				<div className="intro__title-group">
					<h1 tabIndex={0}>Carson</h1>
					<p className="intro__subtitle" tabIndex={0}>Software Developer</p>
				</div>
			</div>
			<p className="intro__about" tabIndex={0}>
				Engineering Technology student at Memorial University, CS alumni from
				John Abbott College. I build things with TypeScript, Python, and
				whatever else gets the job done. When I'm not coding, I'm probably at a
				hackathon or tinkering with IoT hardware.
			</p>
			<nav className="intro__links" aria-label="Social links">
				{LINKS.map((link) => (
					<BracketLink
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
					</BracketLink>
				))}
			</nav>
		</section>
	);
};

export default Intro;
