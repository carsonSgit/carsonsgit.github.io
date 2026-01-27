import type React from "react";
import FooterBrand from "../../../components/ui/FooterBrand";
import FooterLinks from "../../../components/ui/FooterLinks";

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
