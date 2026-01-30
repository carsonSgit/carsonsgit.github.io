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
					<Avatar.Image src="/klungo.png" alt="Carson Spriggs" />
					<Avatar.Fallback>CS</Avatar.Fallback>
				</Avatar.Root>
				
				<div className="intro__title-group">
					<h1 tabIndex={0}>Carson</h1>
					<p className="intro__subtitle" tabIndex={0}>Software Developer @ Botpress</p>
				</div>
			</div>
			<p className="intro__about" tabIndex={0}>
			I'm a full-time student studying Engineering Technology and Applied Sciences @ Memorial University
			and a CS alumni from John Abbott College. I also am a Software Developer @ Botpress and the Co-Chair of CUSEC!
			In my free time I'm most likely tinkering with whatever cool tech I come across, going to hackathons, or working on my own projects.
			Also, I really like penguins.
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
