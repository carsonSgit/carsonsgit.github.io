import Shader from "@/components/ui/shader";
import AsciiFooter from "./components/AsciiFooter";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Intro from "./components/Intro";
import KeyboardNavigation from "./components/KeyboardNavigation";
import ProjectList from "./components/ProjectList";
import "@/home.scss";

const MonoTheme = () => {
	return (
		<div className="mono-portfolio-wrapper theme-mono">
			<div className="mono-portfolio" data-keyboard-navigation>
				<KeyboardNavigation />
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>

				<main id="main-content" className="portfolio-grid">
					<div className="portfolio-grid__left">
						<div className="intro-panel">
							<Intro />
						</div>
						<div className="shader-panel" aria-hidden="true">
							<Shader className="shader-panel__surface" />
						</div>
					</div>
					<div className="portfolio-grid__right">
						<ExperienceList />
						<EducationList />
						<ProjectList />
						<AsciiFooter />
					</div>
				</main>
			</div>
		</div>
	);
};

export default MonoTheme;
