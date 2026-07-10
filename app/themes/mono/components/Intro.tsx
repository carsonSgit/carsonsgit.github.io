import Image from "next/image";
import BracketLink from "./BracketLink";

type IntroLink = {
	label: string;
	href: string;
	srContext?: string;
	target?: "_blank";
	rel?: "noopener noreferrer";
};

const LINKS: IntroLink[] = [
	{
		label: "case studies",
		href: "/case-studies",
	},
	{
		label: "github",
		href: "https://github.com/carsonSgit",
		srContext: "GitHub profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "linkedin",
		href: "https://linkedin.com/in/carsonspriggs",
		srContext: "LinkedIn profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "email",
		href: "mailto:carsonspriggs6@gmail.com",
		srContext: "Email Carson",
		target: "_blank",
		rel: "noopener noreferrer",
	},
];

const Intro = () => {
	return (
		<section className="intro" aria-labelledby="intro-heading">
			<div className="intro__header">
				<div className="intro__avatar">
					<Image
						src="/klungo.webp"
						alt="Carson Spriggs"
						width={72}
						height={72}
						priority
					/>
				</div>

				<div className="intro__title-group">
					<h1 id="intro-heading">Carson Spriggs</h1>
					<p className="intro__subtitle">
						AI Automation Software Developer at Qohash
					</p>
				</div>
			</div>
			<p className="intro__about">
				I have a passion for automation and data, in my day to day I work on
				building AI solutions towards Sovereign Data Security. I am studying
				Engineering Technology and Applied Sciences at Memorial University. In
				my free time, I hang out with my cats, work out, and build personal dev
				tools.
			</p>
			<p className="intro__note">
				Based in Canada. Focused on practical software, thoughtful interfaces,
				and strong implementation details.
			</p>
			<nav className="intro__links" aria-label="Primary links">
				{LINKS.map((link) => (
					<BracketLink
						key={link.label}
						className="intro__action"
						href={link.href}
						target={link.target}
						rel={link.rel}
						srContext={link.srContext}
					>
						{link.label}
					</BracketLink>
				))}
			</nav>
		</section>
	);
};

export default Intro;
