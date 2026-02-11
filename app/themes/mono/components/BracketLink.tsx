import type { AnchorHTMLAttributes, KeyboardEvent } from "react";

interface BracketLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

const BracketLink = ({ children, onClick, ...props }: BracketLinkProps) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			if (onClick) {
				onClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
			} else if (props.href) {
				window.open(
					props.href,
					props.target || "_self",
					props.target === "_blank" ? "noopener,noreferrer" : undefined
				);
			}
		}
	};

	return (
		// biome-ignore lint/a11y/useValidAnchor: BracketLink is a styled anchor that always receives href from callers
		// biome-ignore lint/a11y/noStaticElementInteractions: keyboard handler enhances existing link behavior
		<a className="bracket-link" onKeyDown={handleKeyDown} onClick={onClick} {...props}>
			{children}
		</a>
	);
};

export default BracketLink;
