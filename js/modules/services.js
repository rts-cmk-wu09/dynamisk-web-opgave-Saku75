import createElement from "../components/createElement.js";
import createCards from "../components/createCards.js";

export default function main(data) {
	const services = document.querySelector(".services");

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/services.css";
	});

	const mappedData = data.map((item) => {
		return {
			image: item.illustration,
			headline: item.headline,
			text: item.text,
			linkText: item.linktext,
		};
	});

	createCards(mappedData, services);
}
