import type React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import "../../styles/components.scss";

const RootFooter: React.FC = () => {
	return (
		<footer className="root-footer" id="links">
			<div className="root-footer-container">
				<div className="footer-main">
					<div className="footer-left-column">
						<FooterBrand />
					</div>

					<div className="footer-right-column">
						<FooterLinks />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default RootFooter;
