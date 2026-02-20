import type { AnchorHTMLAttributes } from "react";

interface BracketLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

const BracketLink = ({ children, target, ...props }: BracketLinkProps) => {
	return (
		<a className="bracket-link" target={target} {...props}>
			{children}
			{target === "_blank" && (
				<span className="sr-only">(opens in new tab)</span>
			)}
		</a>
	);
};

export default BracketLink;
