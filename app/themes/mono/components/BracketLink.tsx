import type { AnchorHTMLAttributes } from "react";

interface BracketLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	srContext?: string;
}

const BracketLink = ({
	children,
	target,
	srContext,
	...props
}: BracketLinkProps) => {
	return (
		<a className="bracket-link" target={target} {...props}>
			{children}
			{target === "_blank" && (
				<span className="sr-only">
					{srContext
						? ` (${srContext}, opens in new tab)`
						: " (opens in new tab)"}
				</span>
			)}
		</a>
	);
};

export default BracketLink;
