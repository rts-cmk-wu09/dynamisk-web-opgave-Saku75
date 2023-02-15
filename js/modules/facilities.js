import createElement from "../components/createElement.js";
import createCards from "../components/createCards.js";

export default function main(data) {
	const facilities = document.querySelector(".facilities");

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/facilities.css";
	});

	createElement("h2", facilities).innerText = data.headline;

	const mappedData = data.options.map((item) => {
		return {
			image: item.icon,
			headline: item.headline,
			text: item.text,
			linkText: "Show me more",
		};
	});

	createElement("div", facilities, (cards) => {
		createCards(mappedData, cards);
	});
}
