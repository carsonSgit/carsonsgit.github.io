import Image from "next/image";

const Identity = () => {
	return (
		<header className="identity">
			<Image
				className="identity__avatar"
				src="/klungo.webp"
				alt=""
				width={48}
				height={48}
				priority
			/>
			<div>
				<h1 className="identity__name">Carson Spriggs-Audet</h1>
				<p className="identity__role">Software Developer</p>
			</div>
		</header>
	);
};

export default Identity;
