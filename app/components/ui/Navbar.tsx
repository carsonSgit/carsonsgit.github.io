import { motion } from "framer-motion";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { links } from "../../data/navbarLinks";
import { Button } from "./button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./dialog";
import "../../styles/components.scss";
import type { NavbarLink } from "../../types/navbarLinks";

interface NavbarProps {
	isSnakeActive?: boolean;
	onSnakeToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
	isSnakeActive = false,
	onSnakeToggle,
}) => {
	const [activeSection, setActiveSection] = useState<string>(
		links[0]?.id || "",
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const tickingRef = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!tickingRef.current) {
				window.requestAnimationFrame(() => {
					tickingRef.current = false;

					if (window.scrollY === 0) {
						setActiveSection(links[0]?.id || "");
						return;
					}

					const currentSection = links.find((link: NavbarLink) => {
						const element = document.getElementById(link.id);
						if (!element) return false;
						const rect = element.getBoundingClientRect();
						return (
							rect.top <= window.innerHeight / 2 &&
							rect.bottom >= window.innerHeight / 2
						);
					});

					if (currentSection) {
						setActiveSection((prev: string) =>
							prev !== currentSection?.id ? currentSection?.id : prev,
						);
					}
				});
				tickingRef.current = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = useCallback(
		(event: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
			event.preventDefault();
			if (index === 0) {
				window.scrollTo({ top: 0, behavior: "smooth" });
			} else {
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}
		},
		[],
	);

	const handleSnakeClick = useCallback(() => {
		if (isSnakeActive) {
			onSnakeToggle?.();
		} else {
			setIsDialogOpen(true);
		}
	}, [isSnakeActive, onSnakeToggle]);

	const handleStartGame = useCallback(() => {
		setIsDialogOpen(false);
		onSnakeToggle?.();
	}, [onSnakeToggle]);

	return (
		<nav className="navbar">
			{links.map((link: NavbarLink) => (
				<motion.a
					key={link.id}
					href={`#${link.id}`}
					className={`nav-link font-semibold text-lg ${activeSection === link.id ? "active" : ""}`}
					onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
						handleLinkClick(event, link.id, links.indexOf(link))
					}
					initial={{ x: 10, opacity: 1 }}
					animate={{ x: activeSection === link.id ? 15 : 0 }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
					}}
				>
					{link.label}
				</motion.a>
			))}
			{onSnakeToggle && (
				<>
					<motion.button
						onClick={handleSnakeClick}
						className={`nav-link font-semibold text-lg `}
						initial={{ x: 10, opacity: 1 }}
						animate={{ x: isSnakeActive ? 15 : 0 }}
						transition={{ type: "spring", stiffness: 200, damping: 20 }}
						style={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: 0,
						}}
					>
						SNAKE
					</motion.button>

					<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
						<DialogContent>
							<DialogHeader>
								<DialogTitle className="text-2xl text-primary">
									Play Snake
								</DialogTitle>
							</DialogHeader>
							<DialogDescription className="text-md text-foreground">
								Are you sure you want to play Snake? Well, you won't{" "}
								<i>really</i> be playing Snake,
								<br />
								<br />
								<span className="text-muted-foreground">
									But a Snake using A* will be playing in the grid.
								</span>
							</DialogDescription>
							<DialogFooter className="gap-2 sm:gap-0">
								<Button variant="ghost" onClick={handleStartGame}>
									Yes
								</Button>
								<Button
									variant="secondary"
									onClick={() => setIsDialogOpen(false)}
								>
									No
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</>
			)}
		</nav>
	);
};

export default Navbar;
