import type React from "react";
import Navbar from "../ui/Navbar";
import "../../styles/sections.scss";

interface HeroProps {
	isSnakeActive?: boolean;
	onSnakeToggle?: () => void;
}

const Hero: React.FC<HeroProps> = ({ isSnakeActive, onSnakeToggle }) => {
	return (
		<div className="HeroContainer">
			<h1 className="text-4xl font-bold mb-2">Hi, I'm Carson</h1>
			<h2 className="text-2xl font-regular mb-4">Software Developer</h2>
			<Navbar isSnakeActive={isSnakeActive} onSnakeToggle={onSnakeToggle} />
		</div>
	);
};

export default Hero;
