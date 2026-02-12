import type { AnchorHTMLAttributes } from "react";

interface BracketLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

const BracketLink = ({ children, ...props }: BracketLinkProps) => {
	return (
		<a className="bracket-link" {...props}>
			{children}
		</a>
	);
};

export default BracketLink;
