import createElement from "./createElement.js";

export default function createCards(data, parent, callback) {
	data.forEach((element) => {
		createElement("section", parent, (card) => {
			if (element.image) createElement("img", card).src = element.image;
			if (element.headline)
				createElement("h3", card).innerText = element.headline;
			if (element.text) createElement("p", card).innerText = element.text;
			if (element.linkText)
				createElement("a", card, (link) => {
					link.innerText = element.linkText;
					link.href = "#";
				});
			if (callback) callback(card);
			console.log(card);
		});
	});
}
