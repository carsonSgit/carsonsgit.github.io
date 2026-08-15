import About from "@/components/About";
import Contact from "@/components/Contact";
import Directory from "@/components/Directory";
import Identity from "@/components/Identity";
import "@/styles.scss";

export default function Page() {
	return (
		<div className="page">
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>
			<main className="column" id="main-content">
				<Identity />
				<About />
				<Directory />
				<Contact />
			</main>
		</div>
	);
}
