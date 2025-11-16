import type React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand: React.FC = () => {
	return (
		<div className="footer-section brand-section">
			<h3 className="footer-brand">CARSONSGIT</h3>
			<p className="footer-tagline">Software & QA</p>
			<p className="footer-description">
				Passionate about impact, quality, and innovation for good.
			</p>
			<div className="footer-location">
				<FaMapMarkerAlt />
				<span>Montreal, QC</span>
			</div>
		</div>
	);
};

export default FooterBrand;
