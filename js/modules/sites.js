import createElement from "../components/createElement.js";
import createCards from "../components/createCards.js";

export default function main(data) {
	const sites = document.querySelector(".sites");

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/sites.css";
	});

	createElement("div", sites, (headline) => {
		createElement("h2", headline).innerText = data.headline;
		createElement("p", headline).innerText = data.text;
		createElement("button", headline, (btn) => {
			createElement("img", btn).src = data.btnicon;
			btn.innerHTML += "Start";
		});
	});

	const mappedData = data.places.map((item) => {
		return {
			image: item.img,
			headline: item.name,
			text: item.city,
			linkText: "View the Site",
		};
	});

	createElement("div", sites, (cards) => {
		createCards(mappedData, cards);
	});
}
