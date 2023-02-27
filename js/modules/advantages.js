import createElement from "../components/createElement.js";
import createCards from "../components/createCards.js";

export default function main(data) {
	const advantages = document.querySelector(".advantages");

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/advantages.css";
	});

	createElement("h2", advantages).innerText = "Our Advantages";

	const mappedData = data.map((item) => {
		return {
			image: item.icon,
			headline: item.headline,
			text: item.text,
		};
	});

	createElement("div", advantages, (cards) => {
		createCards(mappedData, cards);
	});
}
